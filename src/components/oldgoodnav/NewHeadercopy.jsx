


"use client";

import React, { Fragment, useEffect, useState } from 'react';

import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'


import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'




import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import MobileNavigation from './MobileNavigation';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const navLinks= [
  {name:'Subscription'}, 
  {href:'/subscription'},
  {name:'Tracks', href:'/tracks'},
  {name:'Tracks', href:'/tracks'},
  {name:'Profile', href:"/profile"},
  {name:'Login', href:'/login'},
  {name:'Settings', href:'/settings'},
  {name:'notification', href:"/notifications"},
  {name:'Profile', href:"/profile"},  ]

const SecondNavMenu = () => (
  <div className="sub-menu_subMenu__zImHF !z-50 !h-[3.2em] space-x-6" style={{ transform: "translateX(36px) translateZ(0px)" }}>
    {navLinks.map((item, index) => (
      <Link
        key={index}
        href={item.href ?? "#"}
        data-version="v1"
        data-zone="same"
        className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5 "
        style={{
          "--text-color": "var(--ds-gray-900)",
          "--text-size": "0.875rem",
          "--text-line-height": "0.875rem",
          "--text-letter-spacing": "initial",
          "--text-weight": 400,
        }}
      >  {item.name} 
     
      </Link>
    ))} 
    <div className="sub-menu_activeBar__Zj0Fh" style={{ transform: "translateX(16px) scaleX(0.7)", display: "block" }}></div>
  </div>
);




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


const transparent =
  'group flex items-center rounded-sm  py-2 text-sm font-medium backdrop-blur'



export default function NewHeadercopy() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // New state for managing the nav checkbox

 const navigation = [{name:'About', href:'/about'}, {name:'Exercises', href:'/exercises'}, {href:"/contact", name:'Contact'} ]
 const paradigms = [{name:'Tracks', href:'/tracks'}, {name:'Settings', href:"/settings"},{name:'Login', href:'/auth'} ]
 const additionalNavItems = [
  {name:'Subscription'}, 
  {href:'/subscription'},
  {name:'Tracks', href:'/tracks'},

  {name:'Profile', href:"/profile"},
  {name:'Login', href:'/login'},
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

  return (
    <div
      id="NEWHEADER-COPY"
      className={`www-navigation__mobile__menu-bar !z-50 box-shadow container-fluid dark:!text-white w-screen mx-auto !overflow-hidden  ${isScrollingUp ? applyStyle : baseStyle}  ${isTop && baseStyle}`}
      style={{ transition: 'all 0.8s' }}
    >
       { isNavOpen && 
          <div className="lg:hidden absolute top-0 w-full">
            <MobileNavigation key="MOBILE" isNavOpen={isNavOpen} handleNavToggle={handleNavToggle} isTop={isTop} isScrollingUp={isScrollingUp}/>
        </div> } 

      {/* <div className="inner h-[4em]  sm:grid sm:grid-cols-6"> */}
      <div className="inner h-[4em] max-[490px]:mt-[0px] sm:grid sm:grid-cols-6">
        <div className={`max-lg:hidden z-50 logo px-8 sm:px-[4%] sm:col-span-2 pt-3 !max-w-sm  ${isScrollingUp ? 'lg:flex lg:pt-[0.2%]' : 'lg:!py-[0.2%]'}`}>
           
            <Link href="/" onClick={handleNavItemClick} className='max-lg:hidden !z-50'>
              <h1 className="text-white text-7xl flex max-w-[30vw] py-[3.2%] !z-50">
                ODFIT <br /> 
              </h1>
            </Link> 
          {isTop && 
             <Link href="/" onClick={handleNavItemClick} className='min-[1024px]:hidden !z-50'>
              <h1 className="text-white text-5xl pb-4 !z-50">ODFIT</h1>         
            </Link>
          }
            <div class="relative -mx-5 mt-8 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl">
            <div class="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
            <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
            </div>
            <div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
            </div>
              <div class="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                </div>
                <div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
               </div>
            </div>
          </div>
         
      </div>
        
        <div className={clsx(`lg:px-4 sm:!px-0 sm:col-span-4  max-[490px]:flex sm:px-0 bg-[#2c2c2c80] relative  ${isScrollingUp ? applyStyle  : baseStyle}  ${isTop && baseStyle} ${isTop && 'bg-[#1c1a1a] ' } ${isSocialVisible && '!bg-[#2b2829]'}`)}>
          
          <nav  className={clsx(``)}
          // className={clsx(`nav nav--primary py-[15px]`)}
          >
        
           
           {/* <div className="absolute top-0 right-0 relative h-34 w-34  bg-white z-50"> */}
            
           {/* </div> */}
           {/* {!isNavOpen &&   
             <Fragment>  <input 
                  type="checkbox"
                  className="nav__toggle-checkbox"
                  id="nav-menu-toggle"
                  checked={isNavOpen}
                  onChange={handleNavToggle}
                />
                <label style={{ transition: '.4s'}}
                    htmlFor="nav-menu-toggle"
                    className={`${isNavOpen ?  "absolute !top-[-4.2em] mt-5 !z-50"  : "absolute !top-[-4.2em]"} nav__toggle dark:!text-white !px-[1em]  mr-10  lg:py-[10px] lg:!top-[-72%] before:text-white  `}>
                  <span className=''/>
                </label>
              </Fragment> 
                } */}
                
            <div id="www-navigation__mobile__menu-content" className={clsx(`nav nav--primary  ${isNavOpen ? '!bg-[#0c0c0c]': ''}`)} > 
            <MobileOpenedHeader  isNavOpen={isNavOpen} handleNavToggle={handleNavToggle}/>

              <div  className={clsx(`${isNavOpen && 'pt-14' } www-navigation__mobile__menu-content w-full flex-block max-[640px]:!mt-[8em]!pb-[4%] lg:!pt-[0%] lg:grid  lg:!py-[2.6%] `)} style={{ transition: '2s !important' }}>
   
            
               <div className="block max-[490px]:mt-[3vh] !z-50  www-navigation__mobile__menu-wrapper">
                
                <div id="menu-primary-navigation" className="menu dark:!text-white sm:flex  w-full group  max-lg:!py-[4%] www-navigation__mobile__menu www-navigation__mobile__menu--explore" >
                  {
                        navigation.map((navlink, index )=>
                        <MobileNavItem  key={index} href={navlink.href} handleNavItemClick={handleNavItemClick}
                                classN={'!text-left !mx-6  h-[56px] lg:h-[89px] lg:h-[2rem] lg:pt--[.9rem] lg:mt-[-30px] max-[640px]:bg-black py-4'}
                                    textStyle={'dark:text-[var(--themeColorGray1)]'}
                                    activeColor={'!text-white'}>{navlink.name}
                        </MobileNavItem>
                      )}
                
                </div>
             
                <div className="max-lg">
                   <MobileNavigation key="DESKTOP" isNavOpen={isNavOpen} handleNavToggle={handleNavToggle} isTop={isTop} isScrollingUp={isScrollingUp} handleNavItemClick={handleNavItemClick}/>
                 </div> 
              <div className={clsx(isTop ? "lg:h-12" : "lg:pt-[1.3%]", "border-t border-[#ffffff25] paradigms  w-full groupmax-[640px]:py-0 max-[640px]:pb-4")}>
                <div className="stack_stack__iZkUS stack sub-menu_container__C2u_O" data-testid="navbar/submenu" data-version="v1" style={{ "--stack-flex": "initial", "--stack-direction": "row", "--stack-align": "center", "--stack-justify": "flex-start", "--stack-padding": "0px", "--stack-gap": "0px" }}>
                <div className="sub-menu_subMenu__zImHF !z-50 !h-[3.2em] py-5" style={{ transform: "translateX(36px) translateZ(0px)" }}>
                  <SecondNavMenu/>
              
                  <div className="sub-menu_activeBar__Zj0Fh" style={{ transform: "translateX(16px) scaleX(0.7)", display: "block" }}></div>
                </div>
              </div>
              </div>
              </div>
               
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
      </div>
    </div>
  );
}

const MobileOpenedHeader = function({isNavOpen, handleNavToggle}){
  return   <div className="z-50 top-14 w-full py-[4%] max-w-[100vw] left-[0%] px-[7%] lg:hidden text-white text-5xl pb-4 !text-gray-100 bg-black "> 
   <div className="inline-flex grid grid-cols-10 w-[100vw]]">
    <h1 className="text-white col-span-9 text-5xl !text-gray-100 text-left  ">
      <Link href="/">ODFIT
      </Link>
    </h1>
   <div className="group flex !relative flex-end">
     <div className=" py-4 justify-end  col-span-2"/>
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



const DinamicElements = () => {
  return      <header className="relative bg-white">
  <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="border-b border-gray-200">
      <div className="flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center lg:hidden">
          <button
            type="button"
            // onClick={() => setOpen(true)}
            className="-ml-2 rounded-md bg-white p-2 text-gray-400"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>

          <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
          </a>
        </div>

        {/* Flyout menus */}
        <PopoverGroup className="hidden lg:block lg:flex-1 lg:self-stretch">
          <div className="flex h-full space-x-8">
            {navigation.categories.map((category) => (
              <Popover key={category.name} className="flex">
                <div className="relative flex">
                  <PopoverButton className="group relative z-10 flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-indigo-600">
                    {category.name}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out group-data-[open]:bg-indigo-600 sm:mt-5 sm:translate-y-px sm:transform"
                    />
                  </PopoverButton>
                </div>

                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-full z-20 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                  <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                  <div className="relative bg-white">
                    <div className="mx-auto max-w-7xl px-8">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                        <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                          {category.featured.map((item, itemIdx) => (
                            <div
                              key={item.name}
                              className={classNames(
                                itemIdx === 0 ? 'aspect-w-2 col-span-2' : '',
                                'group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100',
                              )}
                            >
                              <img
                                alt={item.imageAlt}
                                src={item.imageSrc}
                                className="object-cover object-center group-hover:opacity-75"
                              />
                              <div className="flex flex-col justify-end">
                                <div className="bg-white bg-opacity-60 p-4 text-sm">
                                  <a href={item.href} className="font-medium text-gray-900">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                    Shop now
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                          {category.sections.map((column, columnIdx) => (
                            <div key={columnIdx} className="space-y-10">
                              {column.map((section) => (
                                <div key={section.name}>
                                  <p
                                    id={`${category.id}-${section.id}-heading`}
                                    className="font-medium text-gray-900"
                                  >
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${category.id}-${section.id}-heading`}
                                    className="mt-4 space-y-4"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a href={item.href} className="hover:text-gray-800">
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            ))}

            {navigation.pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                {page.name}
              </a>
            ))}
          </div>
        </PopoverGroup>

        {/* Logo */}
        <a href="#" className="flex">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
        </a>

        <div className="flex flex-1 items-center justify-end">
          <a href="#" className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
            <img
              alt=""
              src="https://tailwindui.com/img/flags/flag-canada.svg"
              className="block h-auto w-5 flex-shrink-0"
            />
            <span className="ml-3 block text-sm font-medium">CAD</span>
            <span className="sr-only">, change currency</span>
          </a>

          {/* Search */}
          <a href="#" className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
          </a>

          {/* Account */}
          <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
            <span className="sr-only">Account</span>
            <UserIcon aria-hidden="true" className="h-6 w-6" />
          </a>

          {/* Cart */}
          <div className="ml-4 flow-root lg:ml-6">
            <a href="#" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
}



const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}