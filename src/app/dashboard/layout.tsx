import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
// import  CustomSidebar  from "@/components/navigations/CustomSidebar";
// import  SideBar  from "@/components/navigations/SideBar";
// import ProfileLayout from "../../components/ProfileComponent"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ODFIT WEB App",
  description: "Great work out web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
       <h1 dangerouslySetInnerHTML={{ __html: "DASHBOARD" }}
                className="prose prose-sm mt-4 text-gray-500" 
         />
    </div>
  );
}



// import '@/styles/globals.css';
// import { AppProps } from 'next/app';
// import { SessionProvider } from 'next-auth/react';
// import Layout from '@/components/layout';

// export default function MyApp({
//   Component,
//   pageProps: { session, ...pageProps }
// }: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       <Layout {...pageProps}>
//         <Component {...pageProps} />
//       </Layout>
//     </SessionProvider>
//   );
// }
