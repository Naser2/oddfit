import Link from 'next/link';

import Logo from '@/components/icons/Logo';
// import GitHub from '../../icons/GitHub';

export default function Footer() {
  return (
    <footer id="footer " className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 gap-8 py-12 text-white transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900">
        <div className="lg:col-span-3 xl:col-span-3">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              <Logo />
            </span>
            <span>ODFITT</span>
          </Link>
        </div>
        <div className="lg:col-span-3 xl:col-span-3">
        <ul className="footer-nav-list flex flex-col flex-initial md:flex-1">
              <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <p className="footer-nav-heading text-white transition duration-150 ease-in-out hover:text-zinc-200">
                SITE
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/tracks"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Tracks
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/exercises"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Excersies
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Account
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/pricing"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Pricing 
              </Link>
            </li>
          </ul>
         
        </div>
        <div className="lg:col-span-3 xl:col-span-3">
       
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <p className="footer-nav-heading text-white transition duration-150 ease-in-out hover:text-zinc-200">
                COMPANY
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/about"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Careers
              </Link>
            </li>
        
          </ul>
        </div>
        <div className="lg:col-span-3 xl:col-span-3">
          <ul className="flex flex-col flex-initial md:flex-1">
        
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <p className="footer-nav-heading text-white transition duration-150 ease-in-out hover:text-zinc-200">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4 is-borderless footer-nav-link ">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 text-white lg:col-span-6 lg:justify-end">
          <div className="flex items-center h-10 space-x-6">
            {/* <a
              aria-label="Github Repository"
              href="https://github.com/vercel/nextjs-subscription-payments"
            >
              <GitHub />
            </a> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row bg-zinc-900">
        <div>
          <span>
            &copy; {new Date().getFullYear()} ODFITT, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-white">Crafted by Nasser</span>
          <a href="#" aria-label="nasser Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="inline-block h-6 ml-4 text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
