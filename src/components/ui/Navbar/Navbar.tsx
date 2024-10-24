import { createClient } from '@/utils/supabase/server';
import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import clsx from 'clsx';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={clsx(s.root, "max-lg:hidden")}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <Navlinks user={user} />
      </div>
    </nav>
  );
}
