import { motion } from 'framer-motion';
import React, { ReactNode, useEffect  } from 'react';
import * as styles from './fadeInOnScroll.module.css';
import useSpacing from '../../hooks/useYOffset'
import "../../styles/global.css";

interface FadeInOnScrollProps {
    children: ReactNode;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
    const spacing = useSpacing();

    useEffect(() => {
        document.documentElement.style.setProperty('--spacing', `${spacing}px`);
    }, [spacing]);


    const animationVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: {opacity: 1, y: -useSpacing(),},
    };

    return (
        <motion.div
            className={`${styles.container}`}
            style={{ marginTop: `${spacing}px` }}
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            key={children ? Math.random() : null}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnScroll;

