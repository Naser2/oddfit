'use client'

import { useEffect, useState } from "react";

// Function to check window size (mobile, iPad, desktop)
export function CheckWindowSize() {

  const [widowInstance , setWindowInstance] = useState()
  const [widowWidth , setWindowWidth] = useState()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowInstance(true)
      const width = window.innerWidth;
       setWindowWidth(width)
      console.log('PAGE_IN_COMPONENTS_DIR_This is client-side rendering');
    } else {
      setWindowInstance(undefined)

      console.log('PAGE_IN_COMPONENTS_DIR_This is server-side rendering');
    }
  }, []);

   
  
    if (width <= 768) {
      // Mobile screen size (width <= 768px)
      return 'mobile';
    } else if (widowWidth > 768 && widowWidth <= 1024) {
      // iPad screen size (768px < width <= 1024px)
      return 'ipad';
    } else {
      // Desktop screen size (width > 1024px)
      return 'desktop';
    }
  }
  
