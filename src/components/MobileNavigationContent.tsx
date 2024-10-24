'use client'

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import NotificationIcon from '@/components/icons//NotificationIcon';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import LoadingDots from './LoadingDots'

// import { useRouter } from 'next/navigation'
import { useAppContext } from '../app/context'
// import { NavigationLeft } from './navigationMenu/navigation'
import { MessageCircle } from 'lucide-react'
import  NavbarUserAvatarComponent  from '@/components/NavbarUserAvatarComponent'
import clsx from 'clsx';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Logo from '@/components/icons/Logo';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';

import { usePathname, useRouter } from 'next/navigation';



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Messages', href: '/messages' },
  { name: 'Settings', href: '/settings' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Sign out', href: '#' },
]

interface NavlinksProps {
  user?: any;
}
export default function MobileNavigationContent({ user}: NavlinksProps) {
  console.log("user___", user);

  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // New state for managing the nav checkbox

  const usernavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, count: '5', current: false },
    { name: 'Home', href: '/profile', icon: UsersIcon, current: false },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderIcon, count: '12', current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Home', href: '/profile', icon: ChartPieIcon, current: false },
    { name: 'Blogs', href: '/blogs', current: false,icon: ChartPieIcon, current: false  },
    // { name: 'Community Leads', href: '/community-leads', current: false },
    // { name: 'Vitual Tours', href: '/virtual-tours', current: false },
    // { name: 'Contact', href: '/contact', current: false },
  
    // { name: 'Terms', href: '/terms', current: false },
  
  ]
 const navigation = [{name:'About', href:'/about'}, {name:'Exercises', href:'/exercises'}, {href:"/contact", name:'Contact'} ]
 const paradigms = [{name:'Tracks', href:'/tracks'}, {name:'Settings', href:"/settings"},{name:'Login', href:'/auth'} ]
 const additionalNavItems = [
  {name:'Subscription'}, 
  {href:'/subscription'},
  {name:'Tracks', href:'/tracks'},

  {name:'Profile', href:"/profile"},
  // {name:'Login', href:'/login'},
  {name:'Social', href:'/social'}  ]

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        // Downscroll code
        setIsScrollingUp(false);
      } else {
        // Upscroll code
        if (st > 0) {
          setIsScrollingUp(true);
        }
        if (st === 0 || st <= 9) {
          setIsTop(true);
          console.log("IS_TOP-", isTop, "ST ", st, "lastScrollTop", lastScrollTop);
        } else {
          setIsTop(false);
          console.log("IS_TOP-", isTop)
        }
      }
      setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);


  // const baseStyle = 'h-[6.1em] sm:h-[8em] lg:!h-[12em] z-50 mt-20 !z-50';
    const baseStyle = 'lg:h-[4.1em] sm:h-[4em] lg:!h-[8em] z-50 mt-0 !z-50';
    const applyStyle = '!sticky lg:pt-2 bg-black lg:!top-0 !z-30 !inset-x-0 lg:h-[5.1em] lg:pl-[1em] lg:pt-[0%] !z-50';

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false);
  };
  const router = getRedirectMethod() === 'client' ? useRouter() : null;
  console.log('MobileNavigation', isNavOpen)

  const mobildeNavTop = [
    {name:'About', href:'/about'},
    {name:'Exercises', href:'/exercises'}, 
    {name:'Tracks', href:'/tracks'},
    {href:"/contact", name:'Contact'},
    {href:"/pricing", name:'Pricing'},
    {href:"/account", name:'Account'}
   ]
  const mobildeNavMiddle =
   [{name:'Settings', href:"/settings"},
  //  {name:'Login', href:'/login'}
   ]
  

  const {
    profile = null,
    openMobileNav = false,
    setOpenMobileNav = () => {},
    handleLinkClick = () => {},
    navRef = null,
  } = useAppContext() || {};
  const userProfile = profile
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

 
 

    if (loading) return <LoadingDots color={''} />; // Show loading spinner while loading

    const pathname = usePathname()

    console.log("NAVIGATION STARTS HERE", userProfile, "USER", user)
    function setSidebarOpen(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

  return (<div id="NewHeaderCOpy-disclosure"  
   className={clsx(`!z-50  absolute relative lg:hidden flex grow flex-col gap-y-5 overflow-y-auto relative bg-[#121213] pt-2 max-w-[600px]:!min-h-[60vh] lg:bg-[white] bg-black dark:bg-black`)}>
           <div className={clsx(`lg:px-4 sm:!px-0 sm:col-span-4  max-[490px]:flex sm:px-0 bg-[#2c2c2c80] relative sm:h-[4em] z-50 mt-0 bg-[#1c1a1a] ' } ${isSocialVisible && '!bg-[#2b2829]'}`)}>
             <nav   className={clsx(`nav nav--primary py-[0px]`)} >
               <div id="www-navigation__mobile__menu-content" className={clsx(`nav nav--primary  ${isNavOpen ? '!bg-[#0c0c0c]': ''}`)} > 
                <MobileOpenedHeader  isNavOpen={isNavOpen} handleNavToggle={handleNavToggle}/>
                <div  className={clsx(`${isNavOpen && 'z-50' } www-navigation__mobile__menu-content w-full flex-block max-[640px]:!mt-[8em]!pb-[4%] lg:!pt-[0%] lg:grid `)} style={{ transition: '2s !important' }}>
                <div className="social-icons z-30 mx-auto justify-center">
                <nav className={`nav nav--social transition-all duration-700 ease-in-out bg-[#1c1a1a] dark:!text-white z-30 absolute top-[0em] left-0 w-full justify-center content-center border-b border-yellow-600`}>
                <div className="paradigms w-full group border-t max-[640px]:py-0 max-[640px]:pb-4 py-8  sm:py-4 sm:h-24   bg-white">
               </div>
              </nav>
             </div>
            </div>  
            </div>
          </nav> 
        </div>
    {isNavOpen && <div className="navigation-body min-h-[100vh] ">
        <div className="block max-[490px]:mt-[2vh] !mx-4 !z-50  www-navigation__mobile__menu-wrapper">
         <div className="www-navigation__mobile__menu-bar">
          <div className="max-w-screen">
            { mobildeNavTop.map((navlink, index )=>
              <MobileNavItem  key={index} href={navlink.href} handleNavItemClick={handleNavItemClick}
                          classN={'!text-left   h-[56px] lg:h-[89px] lg:h-[2rem] lg:pt--[.9rem] lg:mt-[-30px] max-[640px]:bg-black py-4'}
                          textStyle={'dark:text-[var(--themeColorGray1)]'}
                          activeColor={'!text-white'}>{navlink.name}
              </MobileNavItem> )}
          </div>
          </div>
          <div className="www-navigation__mobile__menu-bar">
            <div className="www-navigation__mobile__menu-bar">
             <div className="max-w-screen">
            { mobildeNavMiddle.map((navlink, index )=>
              <MobileNavItem  key={index} href={navlink.href} handleNavItemClick={handleNavItemClick}
                          classN={'!text-left h-[56px] lg:h-[89px] lg:h-[2rem] lg:pt--[.9rem] lg:mt-[-30px] max-[640px]:bg-black py-4'}
                          textStyle={'dark:text-[var(--themeColorGray1)]'}
                          activeColor={'!text-white'}>{navlink.name}
              </MobileNavItem> )
              }
          </div>
          </div>
          <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={usePathname()} />
            <button type="submit"
              data-object-type="button"
              data-identifier="cta"
              className="www-navigation__mobile__login-button button www-navigation__mobile__cta cta text-white text-left text-[#000] is-button w-[90vw] !mx-6"
              >
              Sign out
            </button>
          </form>
        ) : (
          <Link href="/signin" className={"www-navigation__mobile__login-button button www-navigation__mobile__cta cta bg-white text-[#000] is-button w-[90vw] !mx-6"}>
            Sign iiIn
          </Link>
        )}
        {!user &&  <a
                className="www-navigation__mobile__cta cta bg-white text-[#000] is-button w-[90vw] !mx-6"
                href="/login"
                data-object-type="button"
                data-identifier="cta"
                data-sl-variant="get-started-colloquial"
              >
                Get started
              </a>
          }
      </div>
        </div>
        <div className="flex h-16 justify-betwee mb-4">
       
          <div className="flex flex-end  items-center">
         
           <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
    
          
              <button type="button"  // className="relative rounded-full bg-gray-100 p-1 text-gray-600  hover:text-pink-800 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-pink-800"
              >
                {/* <span className="absolute -inset-1.5" /> */}
                <span className="sr-only">View notifications</span>
                <NotificationIcon/>
                {/* <BellIcon aria-hidden="true" className="h-6 w-6" /> */}
              </button>

              {/* Profile dropdown */}
              <div  className="relative ml-3">
                <div className=''>
           
                  <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <button
                          type="button"
                          className="inline-flex z-50 items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
                          onClick={() => setSidebarOpen(true)}>
                          <span className="sr-only">Open sidebar</span>
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </button>
                      
                   {/* {  user ?
                     <button
                        disabled={loading}
                        onClick={() => {
                          setLoading(true);
                          signOut()
                        }}
                        className={`${
                          loading
                            ? 'bg-gray-200/20 border-gray-300'
                            : 'bg-white !text-black  border-black hover:bg-[var(--secondary-color)] hover:!text-white hover:border-pink-400'
                        } w-36  h-8 lg:h-[3em] py-1 text-white border rounded-full text-sm transition-all`}
                      >
                        {loading ? <LoadingDots color="gray" /> : 'Logout'}
                      </button>
                       :
                      <button
                        disabled={loading}
                        onClick={() => {
                          setLoading(true);
                          signIn("Google")
                        }}
                        className={`${
                          loading
                            ? 'bg-gray-200 border-gray-300'
                            : 'bg-black hover:bg-white border-black'
                        } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
                      >
                        {loading ? <LoadingDots color="gray" /> : 'Login'}
                      </button>
                    } */}
                </div>  
                </div>
                <ul  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <div key={item.name} className='!text-left h-[56px] lg:h-[89px] lg:h-[2rem] lg:pt--[.9rem] lg:mt-[-30px] max-[640px]:bg-black py-4 relative w-full sm:h-full justify-center  !pl-[4%] sm:border-r border-black dark:!group-hover:text-white'>
                      <a href={item.href} className="dark:text-[var(--themeColorGray1)] block lg:py-8 sm:py-4 text-2xl uppercase text-white dark:hover:text-white">
                        {item.name}
                      </a>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
 
     { user &&   <div className="md:hidden p-4 mt-6 z-50">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 max-w-[64em]">
        <ul role="list" className="flex flex-1 flex-col gap-y-4">
        {usernavigation.map((item) => (
                 <div key={item.name} className="block  !text-left h-[56px] lg:h-[89px] lg:h-[2rem] lg:pt--[.9rem] lg:mt-[-30px] max-[640px]:bg-black py-4 relative w-full sm:h-full justify-center  !pl-[4%] sm:border-r border-black dark:!group-hover:text-white">
                  <Link
                    href={item.href ?? "#"}
                    className={classNames(
                      item.current
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-200 hover:bg-slate-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 font-semibold leading-6 dark:text-[var(--themeColorGray1)] block lg:py-8 sm:py-4 text-2xl uppercase text-white dark:hover:text-white',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current ? 'text-white' : 'text-slate-200 group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      )}
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-slate-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </Link>
                </div>
              ))}
              </ul> 

        </div>
        <hr className="text-gray-400"/>
        <div className="border-t border-gray-700 pb-3 pt-4 mt-4">
          <NavbarUserAvatarComponent userProfile={userProfile} user={user}/>
          
         {userProfile == null &&  <div className="mt-3 space-y-1 px-2 sm:px-3">
            {userNavigation.map((item) => (
              <div
                key={item.name}  as={Link}
                href={item.href ?? "#"}
                className="block rounded-md px-3 py-2 text-lg font-medium text-white/70 hover:bg-gray-700 hover:text-white"
              >
                {item.name !== "Messages" ? item.name  
                : <div className="inline-flex gap-x-4">{item.name} <MessageCircle aria-hidden="true" className="h-6 w-6" />  </div> }
              </div>
            ))}
          </div>}
        </div>
      </div>}
      </div>}
    </div>
  )
}

export function MobileNavItem({ href, handleNavItemClick, classN, textStyle, activeColor, children }) {
  const router = usePathname();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(router.pathname);
  }, [router.pathname]);

  const handleClick = () => {
    handleNavItemClick(false);
  };

  const isActive = activePath === href;

  return (
    <div className={clsx(classN && classN, "relative w-full sm:h-full justify-center  !pl-[4%] sm:border-r border-black dark:!group-hover:text-white")}
        onClick={handleClick}>
      <Link href={href ?? "#"} passHref>
        <div className={clsx(
          textStyle && textStyle,
          "block lg:py-8 sm:py-4 text-2xl uppercase",
          isActive ? activeColor : "text-white",
          "dark:hover:text-white"
        )}>
          {children}
        </div>
      </Link>
    </div>
  );
}




const MobileOpenedHeader = function({isNavOpen, handleNavToggle}){
  return   <div className="z-50 top-14 w-full py-[4%] max-w-[100vw] left-[0%] px-[7%] lg:hidden text-white text-5xl !text-gray-100 bg-black "> 
   <div className="inline-flex grid grid-cols-5 w-[100vw]">
    <h1 className="text-white col-span-4 text-5xl !text-gray-100 text-left  ">
      <Link href="/">ODFIT
      </Link>
    </h1>
   <div className="group flex !relative flex-end h-14 w-14 ">
     <div className=" justify-end  col-span-1"/>
        <input 
        //  id="INNER-TOGGLE"
          type="checkbox"
          className="nav__toggle-checkbox"
          id="nav-menu-toggle"
          checked={isNavOpen}
          onChange={handleNavToggle}
        />
  
        <label style={{ transition: '.4s'}}
            htmlFor="nav-menu-toggle"
            className={`${ 'mt-5 !z-50  nav__toggle dark:!text-white !px-[0.5em]  !top-[0%] before:text-white'}`}>
          <span className=''/>
        </label>
     </div>
    </div> 
  </div>

}