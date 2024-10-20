'use client'

import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import {
  Bookmark,
  ChatBubbleOvalLeftIcon,
  ClockIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
// import { getItems } from '@/lib/getItems'
// import getById from '@/lib/getById'
// import { ReikiMasterIcon } from '@/components/OmariMasterIcon'
import clsx from 'clsx'
import { Goback } from '@/components/Goback'
import ProductTabs from '@/components/product-tabs'
// import  fetchExercices  from '../../../api/fetchExercices'
const placeholderImage = './placeholder.png';

import { urlFor } from "@/sanity/lib/image.js";
import { constants } from 'buffer'

// import { Accordion } from '@radix-ui/react-accordion'
import { AccordionCard } from '@/components/reusables/Accordion'
const languages = ['en', 'fr', 'hn']
const BenefitsTable = ({ benefits }) => {
  return (
    <div class="border-collapse overflow-hidden  text-left ">
      <table className="overflow-wrap border-collapse text-left">
        <thead>
          <tr>
            <th class="sticky top-0 z-10 flex bg-white p-0 text-sm font-semibold leading-6 text-slate-700  text-black">
              <div class="border-b border-slate-200 py-2 pr-2 dark:border-slate-400/20">
                Benefits
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="align-baseline">
          {benefits.map((benefit) => {
            return (
              <tr key={benefit}>
                <td
                  translate="no"
                  class="whitespace-nowrap py-2 pr-2 font-mono text-xs font-medium leading-6 text-gray-500hover:text-indigo-400"
                >
                  {benefit}
                </td>
                <td
                  translate="no"
                  class="whitespace-pre py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:text-indigo-300"
                ></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
// max-[1000px]:hidden
const IngredientsTable = ({ equipment }) => {
  console.log("MNGREDIENT MAPPPER", equipment)
  return (
    <div class="flex border-collapse overflow-hidden  text-left">
      <table class="overflow-wrap w-full border-collapse text-left">
        <thead>
          <tr>
            <th class="sticky top-0 z-10 flex bg-white p-0 text-sm font-semibold leading-6 text-slate-700 text-black">
              <div class="border-b border-slate-200 py-2 pr-2 dark:border-slate-400/20">
                Equipments
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="align-baseline">
          {equipment.map((tool) => {
            return (
              <tr key={tool}>
                <td
                  translate="no"
                  class="whitespace-nowrap py-2 pr-2 font-mono text-xs font-medium leading-6 text-gray-500hover:text-indigo-400"
                >
                  {tool}
                </td>
                <td
                  translate="no"
                  class="whitespace-pre py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:text-indigo-300"
                ></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default function ExerciseCard({exercise}) {
  console.log('EXERCISE_', exercise)
    // Initial state handling with proper structure checks
    const [initialExercise, setInitialExercise] = useState(exercise[0]);
    const [exerciseState, setExercises] = useState(exercise);
    const [imageSrc, setImageSrc] = useState(placeholderImage); 
  
    const handleLikes = (id, type) => {
      const updatedExercise = { ...exerciseState };
      
      if (exerciseState.liked === true) {
        initialExercise.liked = !initialExercise.liked
        initialExercise.likes =  initialExercise.likes + 1
      }
      initialExercise.liked = !initialExercise.liked
      initialExercise.likes =  initialExercise.likes + 1
  
      // Update the state
      setExercises(updatedExercise);
    };


// Initial placeholder image

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasImage = exercise[0]?.mainImage;
      if (hasImage) {
        console.log('EXERCISE_HAS_IMAGE?', hasImage);
        setImageSrc(urlFor(exercise[0].mainImage.asset).url()); // Update to the actual image
      } else {
        // setImageSrc(urlFor(exercise?.mainImage?.asset).url());
        console.log('EXERCISE_HAS_IMAGE_NO_IMAGE_YET, USING PLACEHOLDER');
      }
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, [exercise]);

    console.log('EXERCISE_HAS_IMAGE_MAIN_IMAGE_SRC', imageSrc)

  const pagePadding =
    'md:px-6 sm:px-8 lg:pb-[0%] lg:px-12 lg:px-44 xl:px-64 md:py-4 md:py-10 h-screen'

  let router = useRouter()
  // let previousPath = props.previousPathname ?? router.previousPath
  return (
    <div className='min-h-screen h-full flex-block h-full'>
      {/* <PodcastsPageLayout classNameName="hidden"> */}
      <Head>
        <title>{`${exercise.name} - By Omari`}</title>
        {/* <meta name="description" content={page.description} /> */}
      </Head>

      <article
        id="EXERCISE-PAGE"
        className={clsx(
          // pagePadding,
          'lg:border-t-0-16 -mt-24 border-slate-500 md:mb-64 md:py-0 lg:mb-64 h-full max-w-3xl mx-auto'
        )}
      >
        {/* <Goback previousPathname={previousPath} /> */}
        {/* <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8"> */}
        <div className="mt-24 sm:mt-0 lg:pt-32 mx-auto  max-w-4xl lg:max-w-2xl lg:flex-block lg:gap-x-10 dark:bg-black lg:h-full lg:py-24 lg:px-24">
          <div className="relative col-start-1 row-start-1 flex flex-col-reverse bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 md:hidden lg:row-start-1 lg:rounded-lg">
          
            <p className="mb-0 max-h-10 text-sm font-medium leading-4 text-white sm:text-slate-500">
              {exercise?.category}
            </p>
          </div>
          <div className="col-start-1 col-end-3 row-start-1 gap-4 sm:mb-6 lg:flex lg:w-full lg:mb-0 lg:gap-6">
          <div className="col-start-1 col-end-3 row-start-1 gap-4 sm:mb-6 lg:flex lg:w-full lg:mb-0 lg:gap-6">
        <img
              src={imageSrc}
              alt={exercise.title || "Exercise Image"}
              className="h-60 w-full object-cover sm:col-span-2 sm:h-52 lg:col-span-full lg:h-[210px] lg:rounded-t-lg xl:h-[300px] xl:w-[600px]"
              loading="lazy"
            />   
             {/* {mainImage ? (
          
          ) : (
            <div className="image-placeholder bg-gray-300">
              Optionally, you can put a fallback image or text here
              <p>No image available</p>
            </div>
          )} */}

            </div>
             
            {exercise.images ? (
              exercise.images.map((images) => {
                return (
                  <>
                    <img
                      src={urlFor(exercise.mainImage.asset).url()}
                      alt={exercise.title || "Exercise Image"}
                      className="h-60 w-full object-cover sm:col-span-2 sm:h-52 lg:col-span-full lg:h-[210px] lg:rounded-t-lg xl:h-[300px] xl:w-[600px]"
                      loading="lazy"
                    />
                    <img
                        src={urlFor(images.src).url()}
                      alt={images.alt}
                      className="hidden h-52 w-full rounded-lg object-cover md:block  lg:h-32"
                      loading="lazy"
                    />
                  </>
                )
              })
            ) : (
              <>
                <div
                  className="hidden h-52 w-full rounded-lg object-cover  lg:h-32"
                  loading="lazy"
                />
                <div
                  className="hidden h-52 w-full rounded-lg object-cover  lg:h-32"
                  loading="lazy"
                />
              </>
            )}

            {/* {exercise.benefits && <BenefitsTable benefits={exercise.benefits} />} */}
          </div>
          <div id="post-content" className="lg:mt-0 bg-zinc-900 pb-44 xl:pb-44">
            
            <div id="DESKTOP-TITLE" className="hidden md:flex">
              <div className="flex-block">
                {/* <h1 className="mt-1 text-xl font-semibold dark:text-white text-black  sm:text-slate-900 dark:sm:text-white md:text-4xl lg:py-2">
                  {exercise.title}
                </h1> */}
                <p className="mb-0 max-h-10 text-sm font-medium leading-4 text-white  sm:text-slate-500">
                  {exercise.category}
                </p>
              </div>
            </div>
            {/* </div> */}
           <div className="card-header bg-[#2a2525] px-2 pb-3  text-white">
         <dl className=" mt-4 flex inline-flex !text-lg  items-center text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5">
              <dt className="sr-only">Reviews</dt>
              <dd className="flex items-center text-orange-400 dark:text-green-400">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className="mr-1 stroke-current dark:stroke-gray-400"
                >
                  <path
                    d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>
                  {exercise.stars}{' '}
                  <span className="font-normal text-slate-100">(4528)</span>
                </span>
              </dd>
              <dd class="ml-2 flex items-center text-indigo-600 dark:text-indigo-400">
                {/* <span class="flex-inline"> */}
                <ClockIcon className="mr-1 h-6 w-6 text-slate-100 dark:text-gray-200" />
                <span className="text-slate-100 dark:text-gray-200">15 mins</span>
                {/* </span> */}
              </dd>

              <dd className="ml-4 flex items-center text-slate-100 dark:text-gray-200">
                {' '}
                <ChatBubbleOvalLeftIcon className="h-5 w-5 !text-slate-100 dark:text-gray-200" />
              
                164
                <button
                  onClick={() => handleLikes(exercise.id)}
                  className={clsx(
                    initialExercise.liked === true ? 'text-red-400/90' : 'text-slate-100 dark:text-gray-200',
                    'ml-4 flex h-9 w-9 flex-none items-center justify-center rounded-md  md:ml-6'
                  )}
                  type="button"
                  aria-label="Like"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
                <span className="ml-2 lg:mx-4">{initialExercise.likes}</span>{' '}
              </dd>
            </dl>
            </div>

            <div class="col-start-1 row-start-3 mt-4 self-center px-4  lg:mt-6">
              <button
                type="button"
                className="mr-4 py-3 px-4 rounded-lg bg-black dark:bg-gray-500  py-2 px-3 text-sm font-medium leading-6 text-white"
              >
                Share
              </button>
              <button
                type="button"
                className="rounded-lg bg-gray-100 hover:bg-sky-600 hover:text-white  darK:hover:bg-[var(--themeColor)] py-2 px-3 text-sm font-medium leading-6 text-black"
              >
                Add to favorites
              </button>
               <div className="pt-4 sm:pt-0  text-slate-600 relative col-start-1 mx-4 mt-6 text-xl text-sm leading-6 sm:col-span-2 md:mt-6 lg:col-span-1 lg:row-start-4 lg:mt-14 lg:mt-10 dark:text-gray-100">
            <h1 className="my-4 mt-1 text-lg font-semibold !text-white sm:text-slate-100 dark:sm:!text-white md:text-2xl" style={{"lineHeight": 'normal'}}>
              {initialExercise.title}
            </h1>
              <p className='text-slate-300 hover:text-white'>{initialExercise.description}</p>
              <div id="DETAILS" className="mt-4  gap-x-4  sm:gap-x-12 lg:mt-10 dark:text-gray-100 relative h-full w-full sm:flex sm:grid sm:grid-cols-2 ">
                {initialExercise.equipment && (
                   <AccordionCard item={initialExercise.equipment}  itemName={"Equipment"}/>
                  // <IngredientsTable equipment={exercise.equipment} />
                )}
                { initialExercise.execution && <AccordionCard item={initialExercise.execution} itemName={"EXecution"}/> }
            
               {initialExercise.benefits &&   <AccordionCard item={initialExercise.benefits} itemName={"Benefits"}/>} 
              </div>
            </div>
            </div>
           
          </div>
        </div>

        {/* <div className="relative mt-4 max-h-64  px-4 md:mt-10 lg:mt-24 xl:mt-36 min-[1400px]:mx-32 dark:text-gray-100">
          <ReikiMasterIcon />
        </div> */}
        {/* </main> */}
      </article>
    </div>
  )
}