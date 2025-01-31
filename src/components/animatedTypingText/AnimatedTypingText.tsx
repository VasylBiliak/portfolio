import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTypingTextProps {
    text: string;
    duration?: number;
}

const AnimatedTypingText: React.FC<AnimatedTypingTextProps> = ({ text, duration = 4 }) => {
    return (
        <>
            {text.split('').map((char, index) => (
                <motion.span
                    key={`${char}-${index}-${Date.now()}`} // Ensures re-rendering for repeated animations
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} // Triggers animation when the element is in view
                    // viewport={{ once: false }} // Allows reanimation every time it enters the viewport
                    transition={{
                        delay: (index * duration) / (text.length * 2), // Staggered character animation
                        duration: duration / text.length, // Controls speed per character
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </>
    );
};

export default AnimatedTypingText;
