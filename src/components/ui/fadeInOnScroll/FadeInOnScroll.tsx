import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useState } from 'react';
import * as styles from './fadeInOnScroll.module.css';
import useSpacing from '@/hooks/useYOffset'
import "@/styles/global.css";

interface FadeInOnScrollProps {
    children: ReactNode;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
    const [isClient, setIsClient] = useState(false);
    const spacing = useSpacing();

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.style.setProperty('--spacing', `${spacing}px`);
        }
    }, [spacing]);

    // SSR-safe fallback: render static div during build
    if (!isClient) {
        return (
            <div
                className={`${styles.container}`}
                style={{ marginTop: `${spacing}px` }}
            >
                {children}
            </div>
        );
    }

    const animationVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: {opacity: 1, y: -spacing,},
    };

    return (
        <motion.div
            className={`${styles.container}`}
            style={{ marginTop: `${spacing}px` }}
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
            transition={{ ease: 'easeOut', duration: 0.8 }}
            viewport={{ once: false, amount: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnScroll;

