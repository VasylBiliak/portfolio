import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import TextAnimation from "@/components/ui/textJello/TextJello";
import AnimatedTypingText from "@/components/ui/animatedTypingText/AnimatedTypingText";

// SSR-safe fallback component
const HeroFallback: React.FC = () => (
    <>
        <h2 className="about_my">
            <TextAnimation text="I'm" />
        </h2>
        <div className="about_my">
            <h2 className="my_name">
                <TextAnimation text="Vasyl " />
                <TextAnimation text="Biliak" />
            </h2>
        </div>
        <h2 className="about_my">
            <div>
                <TextAnimation text="Frontend " />
            </div>
            <div>
                <TextAnimation text="Developer" />
            </div>
        </h2>
        <p className="text_description">
            I'm passionate about building interactive, accessible, and responsive websites and web applications. I enjoy exploring new technologies, concepts, and best practices in web development. I'm always looking for ways to enhance my skills and create innovative solutions.
        </p>
    </>
);

const MotionHero: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Return fallback during SSR to prevent framer-motion from executing
    if (!isClient) {
        return <HeroFallback />;
    }

    const animationVariants = {
        initial: { opacity: 0, x: '-100%' },
        animate: (customDelay: number) => ({
            opacity: 1, x: 0,
            transition: {
                delay: customDelay * 0.2,
                duration: 1,
                ease: 'easeOut'
            }
        }),
    };

    return (
        <>
            <motion.h2
                custom={1}
                variants={animationVariants}
                initial="initial"
                animate="animate"
                className="about_my"
            >
                <TextAnimation text="I'm" />
            </motion.h2>
            <div className="about_my">
                <motion.h2
                    custom={2}
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    className="my_name"
                >
                    <TextAnimation text="Vasyl " />
                    <TextAnimation text="Biliak" />
                </motion.h2>
            </div>
            <motion.h2
                custom={3}
                variants={animationVariants}
                initial="initial"
                animate="animate"
                className="about_my"
            >
                <div>
                    <TextAnimation text="Frontend " />
                </div>
                <div>
                    <TextAnimation text="Developer" />
                </div>
            </motion.h2>
            <p className="text_description">
                <AnimatedTypingText
                    text={"I'm passionate about building interactive, accessible, and responsive websites and web applications. I enjoy exploring new technologies, concepts, and best practices in web development. I'm always looking for ways to enhance my skills and create innovative solutions."}
                    duration={5}
                />
            </p>
        </>
    );
};

export default MotionHero;
