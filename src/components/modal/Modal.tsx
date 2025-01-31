import React from 'react';
import * as styles from './modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal}>
                <p>{message}</p>
                <button onClick={onClose} className={styles.modal_button}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
