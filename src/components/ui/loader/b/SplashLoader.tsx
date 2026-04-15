import React, { useEffect, useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import SignSvg from "./SignSvg";

// Реєстрація плагіна для запобігання помилок при SSR
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

  // Використовуємо GraphQL для отримання даних про файл (якщо потрібно для логів або перевірки)
  const data = useStaticQuery(graphql`
    query GetSignStatic {
      allFile(filter: {name: {eq: "sign"}, sourceInstanceName: {eq: "images"}}) {
        nodes {
          publicURL
        }
      }
    }
  `);

  useEffect(() => {
    // Перевірка наявності window та елементів (захист від помилок SSR)
    if (typeof window === "undefined" || !svgRef.current || !containerRef.current) return;

    const svgElement = svgRef.current;
    const container = containerRef.current;

    // Знаходимо всі контури всередині SignSvg
    const paths = svgElement.querySelectorAll<SVGGeometryElement>(
      "path, line, polyline, circle, ellipse"
    );

    if (paths.length === 0) {
      console.warn("Paths not found inside SignSvg. Ensure SignSvg has path elements.");
      return;
    }

    // 1. Початкове налаштування ліній (приховуємо їх)
    paths.forEach((path) => {
      const length = path.getTotalLength?.() || 0;
      
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fill: "none", // прибираємо заливку на початку
        stroke: "#14cf45", // колір лінії
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      });
    });

    // 2. Створення часової шкали анімації
    const tl = gsap.timeline({
      onComplete: () => {
        // Анімація зникнення всього екрану завантаження
        gsap.to(container, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setIsMounted(false);
            if (onAnimationComplete) onAnimationComplete();
          },
        });
      },
    });

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 2.2,
      ease: "power2.inOut",
      stagger: 0.1, // послідовне малювання ліній
    })
    .to(paths, {
      filter: "drop-shadow(0 0 10px rgba(20, 207, 69, 0.8))",
      duration: 0.5,
    }, "-=0.5")
    // Якщо треба плавно повернути заливку кольором:

    .to(paths, {
      fill: "rgba(20, 207, 69, 1)",
      duration: 0.6
    }, "-=0.3")

    .to({}, { duration: 0.5 }); // pause in the end

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
        overflow: "hidden"
      }}
    >
      {/* Фоновий ефект сяйва 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(20, 207, 69, 0.08) 0%, transparent 70%)",
          animation: "pulseGlow 4s ease-in-out infinite",
        }}
      */} 
        
      <div />

      {/* Контейнер для SVG */}
      <div style={{ width: "320px", position: "relative", zIndex: 1 }}>
        <SignSvg ref={svgRef} />
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default SplashLoader;