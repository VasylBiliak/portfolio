import React from 'react';
import * as styles from './sendButton.module.css';

interface SendButtonProps {
    text: string;
    onClick: () => void;
    isDisabled?: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ text, onClick, isDisabled = false }) => {
    return (
        <button
            className={styles.send_button}
            type="button"
            onClick={onClick}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};

export default SendButton;
