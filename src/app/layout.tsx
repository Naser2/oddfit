import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import MobileNavigation from '../components/MobileNavigation'
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import '../styles/main.css';
import "./globals.css";
const title = 'Next.js Subscription Starter';
const description = 'Brought to you by Vercel, Stripe, and Supabase.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        <MobileNavigation/>
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
        >
          {children}
        </main>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}


// // import { ViewTransitions } from 'next-view-transitions';
// import "./globals.css";
// // import { Metadata } from 'next';

// import localFont from "next/font/local";
// import  Footer  from '@/components/Footer'
// // import '../styles/tailwind.css'
// import 'focus-visible'
// import { PropsWithChildren, Suspense } from 'react';
// // import { NewHeader } from '../components/NewHeader'
// import NewHeadercopy from '../components/NewHeadercopy'
// import { Toaster } from '@/components/ui/Toasts/toaster';
// import { getURL } from '@/utils/helpers';

// import { Metadata } from 'next';
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const title = 'Odfitt Training Platform';
// const description = 'Brought to you by VOmari Hill,The best Workouts for body methamorphosis';

// export const metadata: Metadata = {
//   metadataBase: new URL(getURL()),
//   title: title,
//   description: description,
//   openGraph: {
//     title: title,
//     description: description
//   }
// };
// export default function RootLayout({ children }: PropsWithChildren) {
//   return (      
//       <html lang="en">
//         {/* <ViewTransitions> */}
//         <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative skip`}>
//           <NewHeadercopy/>
//            <main   id="skip"  className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]" >
//              {children}
//            </main>
//         </body> 
//          <Footer/>
//          <Suspense>
//         <Toaster />
//       </Suspense>
       
//       </html>
     
//       )
   
// }
