/** 
* USERS
* Note: This table contains user data. Users should only be able to view and update their own data.
*/
-- Update user_profiles table to add Stripe-related columns
alter table user_profiles
add column if not exists billing_address jsonb,
add column if not exists payment_method jsonb;

-- Enable row-level security on user_profiles
alter table user_profiles enable row level security;

-- Create policies for user_profiles
create policy "Can view own user profile." on user_profiles
for select using (auth.uid() = id);

create policy "Can update own user profile." on user_profiles
for update using (auth.uid() = id);

-- Create a function to handle new user sign-ups and insert into user_profiles
create function public.handle_new_user_profile() 
returns trigger as $$
begin
  insert into public.user_profiles (id, first_name, last_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

-- Create a trigger to call the function after a new user is created in auth.users
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user_profile();

-- Create customers table
create table if not exists customers (
  id uuid references auth.users not null primary key,
  stripe_customer_id text
);
alter table customers enable row level security;

-- Create products table
create table if not exists products (
  id text primary key,
  active boolean,
  name text,
  description text,
  image text,
  metadata jsonb
);
alter table products enable row level security;
create policy "Allow public read-only access." on products for select using (true);

-- Create prices table
create type if not exists pricing_type as enum ('one_time', 'recurring');
create type if not exists pricing_plan_interval as enum ('day', 'week', 'month', 'year');
create table if not exists prices (
  id text primary key,
  product_id text references products,
  active boolean,
  description text,
  unit_amount bigint,
  currency text check (char_length(currency) = 3),
  type pricing_type,
  interval pricing_plan_interval,
  interval_count integer,
  trial_period_days integer,
  metadata jsonb
);
alter table prices enable row level security;
create policy "Allow public read-only access." on prices for select using (true);

-- Create subscriptions table
create type if not exists subscription_status as enum ('trialing', 'active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid', 'paused');
create table if not exists subscriptions (
  id text primary key,
  user_id uuid references auth.users not null,
  status subscription_status,
  metadata jsonb,
  price_id text references prices,
  quantity integer,
  cancel_at_period_end boolean,
  created timestamp with time zone default timezone('utc', now()) not null,
  current_period_start timestamp with time zone default timezone('utc', now()) not null,
  current_period_end timestamp with time zone default timezone('utc', now()) not null,
  ended_at timestamp with time zone,
  cancel_at timestamp with time zone,
  canceled_at timestamp with time zone,
  trial_start timestamp with time zone,
  trial_end timestamp with time zone
);
alter table subscriptions enable row level security;
create policy "Can only view own subscription data." on subscriptions for select using (auth.uid() = user_id);

-- Allow real-time subscriptions for products and prices
drop publication if exists supabase_realtime;
create publication supabase_realtime for table products, prices;
