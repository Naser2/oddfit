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
import LoadingDots from '../components/LoadingDots'

// import { useRouter } from 'next/navigation'
import { useAppContext } from '../app/context'
// import { NavigationLeft } from './navigationMenu/navigation'
import { MessageCircle } from 'lucide-react'
import  NavbarUserAvatarComponent  from '@/components/NavbarUserAvatarComponent'

import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { MobileNavItem } from './NewHeadercopy';


  

const navigation = [
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


export default function MobileNavigation({isNavOpen, handleNavToggle , isTop, isScrollingUp, handleNavItemClick}) {
  console.log('MobileNavigation', isNavOpen, handleNavToggle, isTop, isScrollingUp)

  const mobildeNavTop = [{name:'About', href:'/about'}, {name:'Exercises', href:'/exercises'}, {href:"/contact", name:'Contact'} ]
  const mobildeNavMiddle = [{name:'Tracks', href:'/tracks'}, {name:'Settings', href:"/settings"},{name:'Login', href:'/auth'} ]
  const additionalNavItems = [
   {name:'Subscription', 
  href:'/subscription'},
  {name:'Tracks', href:'/tracks'},
   {name:'Tracks', href:'/tracks'},
   {name:'Profile', href:"/profile"},
   {name:'Login', href:'/login'},
   {name:'Social', href:'/social'}  ]


  const {
    user = null,
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

  return (
    <div  id="NewHeaderCOpy-disclosure"
     className={clsx(`${isNavOpen && '!z-50 absolute relative min-h-[100vh] lg:hidden flex grow flex-col gap-y-5 overflow-y-auto relative bg-indigo-600 pt-2 max-w-[600px]:!min-h-[60vh] lg:bg-[white] dark:bg-black'}`)}>
    <div className="block max-[490px]:mt-[8vh] !mx-4 !z-50  www-navigation__mobile__menu-wrapper">
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

     
      {/* <div className="www-navigation__mobile__menu-bar"><div className="max-w-screen">
   { mobildeNavMiddle.map((navlink, index )=>
    <MobileNavItem  key={index} href={navlink.href} handleNavItemClick={handleNavItemClick}
                  classN={'!text-left h-[56px] lg:h-[89px] lg:h-[2rem] lg:pt--[.9rem] lg:mt-[-30px] max-[640px]:bg-black py-4'}
                textStyle={'dark:text-[var(--themeColorGray1)]'}
                activeColor={'!text-white'}>{navlink.name}
    </MobileNavItem> )}
    
 </div>
 </div> */}
</div>
        <div className="flex h-16 justify-betwee mb-4">
       
          <div className="flex flex-end  items-center">
         
           <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
            <div as="div" className="relative mx-12 justify-center content-center flex">
              <div>
              <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:rea:"
                  data-state="closed"
                  aria-label="681 unseen notifications"
                  className="bell_btn__yil2q bell_shadow__1T7KD " 
                  data-testid="notifications/bell"
                >
                 <div className="relative z-0 flex flex-1 items-center justify-center px-2  sm:inset-0">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative mx-auto">
                      <div className="pointer-events-auto lg:w-[2rem] flex items-center pl-3">
                        <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                      </div>
                      
                    </div>
                  </div>
                </div>
                </button>
            </div>
            </div>  
              <button type="button"
                // className="relative rounded-full bg-gray-100 p-1 text-gray-600  hover:text-pink-800 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-pink-800"
              >
                {/* <span className="absolute -inset-1.5" /> */}
                <span className="sr-only">View notifications</span>
                <NotificationIcon/>
                {/* <BellIcon aria-hidden="true" className="h-6 w-6" /> */}
              </button>

              {/* Profile dropdown */}
              <div as="div" className="relative ml-3">
                <div className=''>
           
                  <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <button
                          type="button"
                          className="inline-flex z-50 items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
                          onClick={() => setSidebarOpen(true)}>
                          <span className="sr-only">Open sidebar</span>
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </button>
                      
                   {  user ?
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
                          signIn("Google", {redirect: "/properties"})
                        }}
                        className={`${
                          loading
                            ? 'bg-gray-200 border-gray-300'
                            : 'bg-black hover:bg-white border-black'
                        } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
                      >
                        {loading ? <LoadingDots color="gray" /> : 'Login'}
                      </button>
                    }
                </div>  
         

                </div>
      
     
                <ul
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <div key={item.name}>
                      <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
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

      <div className="md:hidden p-4 mt-6 z-50">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 max-w-[24em]">
        <ul role="list" className="flex flex-1 flex-col gap-y-4">
        {navigation.map((item) => (
                 <div key={item.name} className="block">
                  <Link
                    href={item.href ?? "#"}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      )}
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
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
          <NavbarUserAvatarComponent userProfile={userProfile}/>
          
         {userProfile == null &&  <div className="mt-3 space-y-1 px-2 sm:px-3">
            {userNavigation.map((item) => (
              <div
                key={item.name}
                as={Link}
                href={item.href ?? "#"}
                className="block rounded-md px-3 py-2 text-lg font-medium text-white/70 hover:bg-gray-700 hover:text-white"
              >
                {item.name !== "Messages" ? item.name  
                : <div className="inline-flex gap-x-4">{item.name} <MessageCircle aria-hidden="true" className="h-6 w-6" />  </div> }
              </div>
            ))}
          </div>}
        </div>
      </div>
    </div>
  )
}


// export  function SiteNavigation({userProfile}) {

//   return (
//     // <div className={clsx(`${pathname === '/tasks' ? "!hidden" : "sidenav-with-history-container.expanded[_ngcontent-ng-c1631036836] flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 dark:bg-black  px-6 max-w[300px]"}`)}>
//     <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 dark:bg-black  px-6 max-w[300px]">
//       <div className="flex h-16 shrink-0 items-center">
//         <img
//           alt="Your Company"
//           src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
//           className="h-8 w-auto"
//         />
//       </div>
//       <nav className="flex flex-1 flex-col">
//         <ul role="list" className="flex flex-1 flex-col gap-y-7">
//           <li>
//             <ul role="list" className="-mx-2 space-y-1">
//               {navigation.map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className={classNames(
//                       item.current
//                         ? 'bg-indigo-700 text-white'
//                         : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
//                       'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
//                     )}
//                   >
//                     <item.icon
//                       aria-hidden="true"
//                       className={classNames(
//                         item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
//                         'h-6 w-6 shrink-0',
//                       )}
//                     />
//                     {item.name}
//                     {item.count ? (
//                       <span
//                         aria-hidden="true"
//                         className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
//                       >
//                         {item.count}
//                       </span>
//                     ) : null}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </li>
//           <li>
//             <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
//             <ul role="list" className="-mx-2 mt-2 space-y-1">
//               {teams.map((team) => (
//                 <li key={team.name}>
//                   <a
//                     href={team.href}
//                     className={classNames(
//                       team.current
//                         ? 'bg-indigo-700 text-white'
//                         : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
//                       'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
//                     )}
//                   >
//                     <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
//                       {team.initial}
//                     </span>
//                     <span className="truncate">{team.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </li>
//           <li className="-mx-6 mt-auto">
//             <a
//               href="#"
//               className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
//             >
//               <img
//                 alt=""
//                 src={userProfile.avatar_rul ?? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
//                 className="h-8 w-8 rounded-full bg-indigo-700"
//               />
//               <span className="sr-only">Your profile</span>
//               <span aria-hidden="true">Tom Cook</span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }
