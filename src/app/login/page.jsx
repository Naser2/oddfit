'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';


const AuthPage = () => {
    const [isRegistering, setIsRegistering] = useState(false); // Toggling between login and registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
  
    const supabase = createClient();
  
    // Handle login
    const handleLogin = async (e) => {
      e.preventDefault();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setErrorMessage(error.message);
      } else {
        router.push('/private'); // Redirect on successful login
      }
    };
  
    // Handle registration
    const handleRegister = async (e) => {
      e.preventDefault();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
          },
        },
      });
  
      if (error) {
        setErrorMessage(error.message);
      } else {
        router.push('/private'); // Redirect on successful registration
      }
    };
    return (
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
             <div className="logo flex gap-x-4"> <img
                alt="Your Company"
                src="https://nextjs.org/icons/vercel.svg"
                className="h-11 text-black bg-black"
                style={{ color: '#0000' }}
              />
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ODFIT
              </h1>
             
                </div>
            
           
              {/* <h1 className="mt-24 text-3xl  text-center font-bold tracking-tight text-gray-700 sm:mt-10 sm:text-4xl py-4">
              {isRegistering ? 'Register' : 'Login'}
            
              </h1> */}
                        {/* ------------------- AUTH FORM BEGIN ------------ */}
     <div className="py-4 lg:max-w-[24vw]  gap-6 flex-wrap items-center justify-center">
      <div
        data-state="active"
        data-orientation="horizontal"
        role="tabpanel"
        aria-labelledby="radix-:r0:-trigger-account"
        id="radix-:r0:-content-account"
        tabIndex={0}
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="text-2xl  font-bold tracking-tight text-gray-700 m:text-3xl py-4">
              {isRegistering ? 'Register' : 'Login'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isRegistering
                ? 'Create a new account. Click save when you are done.'
                : 'Log into your account here.'}
            </p>
          </div>

          <div className="p-6 pt-0 space-y-2">
            <form
              onSubmit={isRegistering ? handleRegister : handleLogin}
              className="space-y-4"
            >
              {isRegistering && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>
              )}

              {isRegistering && (
                <div className="space-y-1">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              )}

              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="anick@odfit.com"
                />
              </div>

              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border focus:ring-black border-input focus:border-indigo-50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="•••••••"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                {isRegistering ? 'Get Started' : 'Login'}
              </button>
            </form>

            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

            <p className="text-sm mt-4">
              {isRegistering
                ? 'Already have an account?'
                : "Don't have an account?"}{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsRegistering(!isRegistering)}
              >
            <> {isRegistering ? 'Login here' : 'Register here '} <span aria-hidden="true">→</span></>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
             {/* ------------------ AUTH FORM END ---------------- */}
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/verification"
                  className="rounded-md bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Forgot password ?
                </a>
                <a href="/reset-password" className="text-sm font-semibold leading-6 text-gray-900">
                  Resend Confirmation Email ? <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative bg-black lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              alt=""
              src="/omari_3_ copy-modified.png"
              className="aspect-[3/2] w-full bg-black object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
       
      </div>
        
    )
  }
  



  export default AuthPage