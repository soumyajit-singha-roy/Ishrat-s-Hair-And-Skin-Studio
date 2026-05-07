"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Simple cubic easing
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let requestAnimationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrameId = requestAnimationFrame(raf);
    }

    requestAnimationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(requestAnimationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
