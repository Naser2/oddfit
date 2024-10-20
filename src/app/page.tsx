'use client'

import Image from "next/image";
import { useEffect} from "react";
import { useSearchParams, useRouter } from "next/navigation"; 

import ChallengeListFeatured from '@/components/ChallengeListFeatured'
// import { PlayButton } from '@/components/PlayButton'
// import {
//   BuildingOffice2Icon,
//   EnvelopeIcon,
//   PhoneIcon,
// } from '@heroicons/react/24/outline'
import AboustSection from '@/components/AboustSection'
import Gallery from '@/components/Gallery'
import AnimatedGallery from '@/components/AnimatedGallery'
import ContactSection from '@/components/ContactSection'
import SectionProvenMethods from '@/components/SectionProvenMethods'
import SectionBenefits from '@/components/SectionBenefits'
import { SectionSSubscription } from '@/components/SectionSubscribtion'
import AnimatedComponent from '@/components/AnimatedComponent'
import SlidingImage from '@/components/SlidingImage'
// import { fetchTracks } from '@/utils/fetchTracks'
import fetchTracks  from '../../api/getTracks'
import fetchLandingPageData from '../../api/fetchLandingPageData' 
import  ElevatorPitch  from '@/components/ElevatorPitch'
import Link from "next/link";
import  getTracks  from '../../api/getTracks.ts'

import { useState } from "react";

export default  function Home() {
   const[homePageData, setHomegPageData] = useState(null)
   const [tracks, setTracks] = useState();
   const [loading, setLoading] = useState(true);
   const router = useRouter();

  const searchParams = useSearchParams(); // Use useSearchParams for query params

  useEffect(() => {
    const code = searchParams.get("code"); // Extract the 'code' param from URL
    if (code) {
      // Redirect to the reset-password page with the code as query param
      router.push(`/reset-password?code=${code}`);
    }
  }, [searchParams, router]);


  useEffect(() => {
    const fetchTracksData = async () => {
      try {
        const data = await getTracks(); // Fetch tracks data directly
        console.log("TRACKS_IN_TRACKS_PAGE", data);
        const landingPageData = await fetchLandingPageData();
        setHomegPageData(landingPageData)
        console.log("HOME_PAGE", landingPageData);

        // Ensure the data is properly structured
        if (data && Array.isArray(data.tracks)) {
          setTracks(data.tracks); // Set the tracks array
        } else {
          console.error("Unexpected tracks data format", data);
          setTracks([]); // Default to an empty array if the structure is unexpected
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTracksData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Loading-homePageData", homePageData);

  // const experiences = await fetchExperiences();

  // const skills = await fetchSkills();
  // const subSkills: SubSkill[] = await fetchSubSkills();

  

  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen lg:p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="relative w-screen overflow-hidden ">
        <div
          id="comp-kkr1kfyd"
          className="comp-kkr1kfyd YzqVVZ wixui-column-strip__column"
        >
          <div
            id="bgLayers_comp-kkr1kfyd"
            data-hook="bgLayers"
            data-motion-part="BG_LAYER"
            className="MW5IWV N3eg0s"
          >
      <SlidingImage hero={homePageData?.hero}/>
      <AnimatedComponent textToScaleDown={homePageData?.hero.title} break/>
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

        <ChallengeListFeatured tracks={tracks}/>
        <AnimatedGallery />
        <AboustSection aboutSection={homePageData.about} shouldBreak/>
        <ElevatorPitch elevatorPitch={homePageData.ElevatorPitch} />
        <SectionSSubscription pricingSections={homePageData?.pricing}/>
        </div>   
       </div>
       
        <SectionBenefits />
        <SectionProvenMethods benefit={homePageData?.benefits}/>
        <Gallery landingGalleryData={homePageData.gallery}/>
              {/* <AnimatedGallery/> */}
         <ContactSection contactForm={homePageData?.contact}/>
      </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/login"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          LLogin
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/tracs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
        Tracks
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/login"
    
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Get Started →
        </Link>
      </footer>
    </div>
  );
}
