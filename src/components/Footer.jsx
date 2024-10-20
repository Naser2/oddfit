import Link from 'next/link'

import { Container } from '@/components/Container'
import { useEffect, useRef } from 'react';

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-freevolve overflow-wrap  transition hover:text-sky-400"
    >
      {children}
    </Link>
  )
}

const footerNavigation = {
  products: [
    { name: 'Tracks', href: '/tracks' },
    { name: 'Exercises', href: '/exercises' },
    // { name: 'About', href: '/about' },
    { name: 'Profile', href: '/profile' },
    { name: 'Diets', href: '/diets' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Message', href: '/message' },
    // { name: 'Sustainability', href: '#' },
    // { name: 'Press', href: '#' },
    { name: 'Callendar', href: 'callendar' },
    { name: 'Terms & Conditions', href: 'terms' },
    { name: 'Privacy', href: '/privacy' },
   
  ],
  customerService: [
    { name: 'Contact', href: '/callendar' },
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Secure Payments', href: '/payments' },
    { name: 'FAQ', href: 'faq' },
    // { name: 'Find a store', href: '#' },
  ],
}


const Footer = () => {
  

  const sectionRef = useRef(null);
  const footerRef = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              const bgMedia = entry.target;
              if (entry.isIntersecting) {
                  bgMedia.classList.add('bg-pan-right');
              }
               else {
                  bgMedia.classList.add('bg-pan-right');
              }
          });
      },
      { threshold: 0.0 }  // Adjust the threshold as needed
  );

  if (footerRef.current) {
      observer.observe(footerRef.current);
  }

  return () => {
      if (footerRef.current) {
          observer.unobserve(footerRef.current);
      }
  };
}, []);
  return (
    
    <div className='w-full bg-[#383c48]'>
        <footer 
        //  id="comp-kkr3gyea" ref={sectionRef} 
        id="APP_FOOTER" ref={footerRef} 
        aria-labelledby="footer-heading VrZrC0 cKxVkc">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div
        //  id="comp-kkr3gyea" ref={sectionRef} 
          className="mx-auto max-w-7xl xl:max-w-none px-10 sm:px-6 lg:px-0">
          <div className="border-t border-gray-200 dark:border-gray-700 py-20">
            <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1  hidden">
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </div>

              {/* Sitemap sections */}
              <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-400 sm:text-xl ">Products</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.products.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a href={item.href} className="text-gray-500 dark:text-gray-200 text-xl  hover:text-gray-100">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-400 sm:text-xl sm:text-2xl ">Company</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a href={item.href} className="text-gray-500 dark:text-gray-200 text-xl  hover:text-gray-100">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-400 sm:text-xl sm:text-2xl ">Customer Service</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.customerService.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-500 dark:text-gray-200 text-xl  hover:text-gray-100">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter section */}
              <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-400 sm:text-xl ">Sign up for our newsletter</h3>
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
                <form className="mt-2 flex sm:max-w-md w-[82vw] lg:w-full ">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    required
                    autoComplete="email"
                    className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white dark:text-black px-4 py-2 text-base font-medium dark:hover:text-white shadow-sm hover:bg-[var(--themeColorGray)] focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 text-center">

            <div className="p-0 text-md-right d-sm-inline-block d-md-block border-right-social-icons col-12 text-center col-md-4 col-lg-5 ng-star-inserted inline-flex">
              <ngc-social-icons>
                {/**/}
                <div className="social-icons-container ng-star-inserted flex gap-x-4">
                  {/**/}
                  <a
                    aria-haspopup="true"
                    className="facebook circle-outline picturefill-background ng-star-inserted"
                    href="javascript:void(0);"
                    tabIndex={0}
                    id="footer-facebook"
                  >
                    <img
                      alt="Facebook"
                      src="//content.delta.com/content/www/us/en.damAssetRender.20211110T1419425980500.html/content/dam/delta_homepage_redesign/hpr_optimized_images/social_icons/Facebook-icon-contrast.svg"
                    />
                  </a>
                  <a
                    aria-haspopup="true"
                    className="facebook circle-outline picturefill-background mr-0 ng-star-inserted"
                    href="javascript:void(0);"
                    tabIndex={0}
                    id="footer-twitter"
                  >
                    <img
                      alt="Twitter"
                      src="//content.delta.com/content/www/us/en.damAssetRender.20211110T1419425450500.html/content/dam/delta_homepage_redesign/hpr_optimized_images/social_icons/Twitter-icon-contrast.svg"
                    />
                  </a>
                  <a
                    aria-haspopup="true"
                    className="facebook circle-outline picturefill-background ng-star-inserted"
                    href="javascript:void(0);"
                    tabIndex={0}
                    id="footer-facebook"
                  >
                    <img
                      alt="Facebook"
                      src="//content.delta.com/content/www/us/en.damAssetRender.20211110T1419425980500.html/content/dam/delta_homepage_redesign/hpr_optimized_images/social_icons/Facebook-icon-contrast.svg"
                    />
                  </a>
                </div>
              </ngc-social-icons>
            </div>
            <p className="text-sm text-gray-500">&copy; 2021 OmariHills, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer></div>
  )
}

export default Footer