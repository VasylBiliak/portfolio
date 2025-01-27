import React from "react";
import { motion } from 'framer-motion';
import "../styles/global.css";
import TextAnimation from "./textJello";
import AnimatedTypingText from "./animatedTypingText/AnimatedTypingText";

const Home: React.FC = () => {

    const animationVariants = {
        initial: { opacity: 0, x: '-100%' },
        animate:(customDelay: number) => ({
            opacity: 1, x: 0,
            transition: {
            delay: customDelay * 0.2,  // Calculate delay based on `costom`
            duration: 1,
            ease: 'easeOut'
        }
    }),
    };

    return (
        <section className="home">
            <motion.h2
                custom={1}
                variants={animationVariants}
                initial="initial"
                animate="animate"
                className="greeting"
            >
                <TextAnimation text="I'm"/>
            </motion.h2>
            <div className="about_my">
                <motion.h2
                    custom={2}
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    className="my_name"
                >
                    <TextAnimation text="Vasyl "/>
                    <TextAnimation text="Biliak"/>
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
                    <TextAnimation text="I'm"/>
                </div>
                <div>
                    <TextAnimation text="Frontend"/>
                </div>
                <div>
                    <TextAnimation text="Developer"/>
                </div>
            </motion.h2>
            <p className="text_description">
                <AnimatedTypingText
                    text={"Specializing in building modern web applications using React, TypeScript, JavaScript, HTML, and CSS."}
                    duration={5}/>
            </p>
        </section>
    );
};

export default Home;
