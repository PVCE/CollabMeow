"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PagePaintReveal() {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const strokes = overlayRef.current?.querySelectorAll<HTMLElement>(".paint-stroke");

      if (!strokes || strokes.length === 0) {
        return;
      }

      gsap.set(overlayRef.current, {
        opacity: 1,
      });

      gsap.set(strokes, {
        x: "-120%",
        opacity: 1,
      });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      strokes.forEach((stroke, index) => {
        tl.to(
          stroke,
          {
            x: "0%",
            duration: 1.0,
            delay: index * 0.08,
          },
          index === 0 ? undefined : `-=${0.3}`
        )
          .to(
            stroke,
            {
              x: "120%",
              opacity: 0,
              duration: 0.6,
              ease: "power2.in",
            },
            "+=0.2"
          );
      });

      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.22,
          ease: "power2.inOut",
        },
        "+=0.08"
      );
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        pointerEvents: "none",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <div
        className="paint-stroke"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "calc(100% / 7)",
          height: "100%",
          background: "#fffaf3",
          transform: "translateX(-120%)",
        }}
      />
      <div
        className="paint-stroke"
        style={{
          position: "absolute",
          top: 0,
          left: "calc(100% / 7)",
          width: "calc(100% / 7)",
          height: "100%",
          background: "#fffaf3",
          transform: "translateX(-120%)",
        }}
      />
      <div
        className="paint-stroke"
        style={{
          position: "absolute",
          top: 0,
          left: "calc((100% / 7) * 2)",
          width: "calc(100% / 7)",
          height: "100%",
          background: "#fffaf3",
          transform: "translateX(-120%)",
        }}
      />
      <div
        className="paint-stroke"
        style={{
          position: "absolute",
          top: 0,
          left: "calc((100% / 7) * 3)",
          width: "calc(100% / 7)",
          height: "100%",
          background: "#fffaf3",
          transform: "translateX(-120%)",
        }}
      />
      <div
        className="paint-stroke"
        style={{
          position: "absolute",
          top: 0,
          left: "calc((100% / 7) * 4)",
          width: "calc(100% / 7)",
          height: "100%",
          background: "#fffaf3",
          transform: "translateX(-120%)",
        }}
      />
      <div
        className="paint-stroke"
        style={{
          position: "absolute",
          top: 0,
          left: "calc((100% / 7) * 5)",
          width: "calc(100% / 7)",
          height: "100%",
          background: "#fffaf3",
          transform: "translateX(-120%)",
        }}
      />
      <div
        className="paint-stroke"
        style={{
          position: "absolute",
          top: 0,
          left: "calc((100% / 7) * 6)",
          width: "calc(100% / 7)",
          height: "100%",
          background: "#fffaf3",
          transform: "translateX(-120%)",
        }}
      />
    </div>
  );
}
