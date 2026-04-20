import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

// Імпортуємо ваші компоненти та стилі
import SignSvg from "./SignSvg";
import ElectricBorder from "@components/ui/ElectricBorder/ElectricBorder";
import * as styles from "./loader.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CSSPlugin);
}

type SplashLoaderProps = {
  onAnimationComplete?: () => void;
};

const SplashLoader: React.FC<SplashLoaderProps> = ({ onAnimationComplete }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(true);


  const [hoverColor, setHoverColor] = useState<string>("#14cf45");

  useEffect(() => {
  if (typeof window !== "undefined") {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--btn-hover-bg")
      .trim();
    
    if (color) setHoverColor(color);
  }
}, []);


  useEffect(() => {
    if (typeof window === "undefined" || !svgRef.current || !containerRef.current) return;

    const svgElement = svgRef.current;
    const container = containerRef.current;

    const paths = svgElement.querySelectorAll<SVGGeometryElement>(
      "path, line, polyline, circle, ellipse"
    );

    if (paths.length === 0) return;

    paths.forEach((path) => {
      const length = path.getTotalLength?.() || 0;
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fill: "rgba(20, 207, 69, 0)",
        stroke: "#159374",
        strokeWidth: 1.5,
      });
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            setIsMounted(false);
            onAnimationComplete?.();
          },
        });
      },
    });

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 2.2,
      ease: "power2.inOut",
      stagger: 0.1,
    })
    .to(paths, {
      filter: "drop-shadow(0 0 10px #159374)",
      fill: "#096565",
      duration: 0.6,
    }, "-=0.3")
    .to({}, { duration: 50}); 

    return () => { tl.kill(); };
  }, [onAnimationComplete]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className={styles.loaderWrap}
      style={{ 
        position: "fixed", 
        zIndex: 100000, 
        backgroundColor: "#0e0e0e",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.loader}>
        <ElectricBorder
          color="#ffff00"
          speed={1.9}
          chaos={0.5}          
          style={{
            borderRadius: "50%",
            minHeight: "220px",
            minWidth: "220px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
            
          }}
        >
          {/* animation SVG */}
          <div style={{ width: "180px", display: "flex", justifyContent: "center" }}>
            <SignSvg ref={svgRef} />
          </div>
        </ElectricBorder>
      </div>
    </div>
  );
};

export default SplashLoader;