import React, { Suspense, lazy } from "react";
import "../styles/global.css";

// Lazy load heavy animation components to reduce TBT
const MotionHero = lazy(() => import("./MotionHero"));
const SimpleHero = lazy(() => import("./SimpleHero"));

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const Home: React.FC = () => {
    const [reducedMotion, setReducedMotion] = React.useState(true);

    React.useEffect(() => {
        setReducedMotion(prefersReducedMotion());
    }, []);

    return (
        <section className="home">
            <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
                {reducedMotion ? <SimpleHero /> : <MotionHero />}
            </Suspense>
        </section>
    );
};

export default Home;
