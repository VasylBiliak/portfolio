import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ReactComponent as SignatureSVG } from "../../../images/sign.svg";

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const svgElement = svgRef.current;
    const container = containerRef.current;

    if (!svgElement || !container) return;

    const paths = svgElement.querySelectorAll<SVGGeometryElement>(
      "path, line, polyline, circle, ellipse"
    );

    if (!paths.length) return;

    paths.forEach((path) => {
      const length = path.getTotalLength?.();
      if (!length || isNaN(length)) return;

      path.removeAttribute("fill");
      path.removeAttribute("stroke");

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        stroke: "#14cf45",
        strokeWidth: 1,
      });
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container, {
          opacity: 0,
          duration: 0.6,
          onComplete: () => {
            setIsMounted(false);
            onAnimationComplete?.();
          },
        });
      },
    });

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power2.inOut",
      stagger: 0.15,
    })
      .to(
        paths,
        {
          filter: "drop-shadow(0 0 8px rgba(184, 242, 230, 0.6))",
          duration: 0.4,
        },
        "-=0.5"
      )
      .to({}, { duration: 0.8 });

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1c1c1c",
        zIndex: 100000,
      }}
    >
      {/* glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(184, 242, 230, 0.1) 0%, transparent 70%)",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />

      {/* SVG */}
      <SignatureSVG
        ref={svgRef}
        style={{
          width: "320px",
          height: "auto",
          position: "relative",
          zIndex: 1,
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default SplashLoader;