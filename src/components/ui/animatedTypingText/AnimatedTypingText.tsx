import React from 'react';

interface AnimatedTypingTextProps {
    text: string;
    duration?: number;
}

const AnimatedTypingText: React.FC<AnimatedTypingTextProps> = ({ text }) => {
    return (
        <span className="typing-text">{text}</span>
    );
};

export default AnimatedTypingText;
