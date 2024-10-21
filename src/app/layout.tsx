
import { ViewTransitions } from 'next-view-transitions';
import "./globals.css";
import { Metadata } from 'next';

import localFont from "next/font/local";
import  Footer  from '@/components/Footer'
// import '../styles/tailwind.css'
import 'focus-visible'
import { NewHeader } from '../components/NewHeader'

// import { useEffect, useRef } from "react";

// function usePrevious(value) {
//   let ref = useRef()

//   useEffect(() => {
//     ref.current = value
//   }, [value])

//   return ref.current
// }



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ODFIT",
  description: "A WEB APP FOR THOSE THINGS YOU CANT BUY",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (      
      <html lang="en">
 
        {/* <ViewTransitions> */}
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-[100vh]`}>
           <NewHeader />  
            {children}
          </body> 
          <Footer/> 
       {/* </ViewTransitions>     */}
      </html>
     
      )
   
}
