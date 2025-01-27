import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedTypingText is a component that animates the text as if it is being typed.
 * Each character appears sequentially with a smooth fade-in effect over a specified duration.
 *
 * Props:
 * - text (string): The text to animate.
 * - duration (number): The total duration in seconds for the text to fully appear (default is 4 seconds).
 */

interface AnimatedTypingTextProps {
    text: string;
    duration?: number; // Total duration for the text to fully appear (in seconds)
}

const AnimatedTypingText: React.FC<AnimatedTypingTextProps> = ({ text, duration = 4 }) => {
    return (
        <div>
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}  // Initial state: invisible
                    animate={{ opacity: 1 }}  // Final state: visible
                    transition={{
                        delay: (index * duration) / (text.length * 2),  // Delay each character's appearance
                        duration: duration / text.length  // Duration for each character to appear
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

export default AnimatedTypingText;
