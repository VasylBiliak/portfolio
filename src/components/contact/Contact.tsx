import React, { useState } from 'react';
import { sendMessage } from './sendMessage';
import Modal from '../modal';
import * as styles from './contact.module.css';
import SendButton from '../sendButton';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });
    const [errorMessages, setErrorMessages] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setErrorMessages('');
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async () => {
        if (!formData.message || !formData.email) {
            setErrorMessages('Please fill in the form correctly!');
            return;
        }

        if (formData.email && !validateEmail(formData.email)) {
            setErrorMessages('Invalid email address :-(');
            return;
        }

        const message = `
        <b>Email:</b> ${formData.email || '-'} 
        <b>Message:</b> ${formData.message}
        `;

        try {
            await sendMessage(message, import.meta.env.VITE_APP_TOKEN , import.meta.env.VITE_APP_ID);
            setModalMessage('Message sent successfully!');
            setIsModalOpen(true);
            setFormData({
                email: '',
                message: '',
            });
        } catch (error) {
            setModalMessage('Failed to send message. Please try again.');
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                message={modalMessage}
            />
            <form className={styles.contact_us__fields} id="contactForm" noValidate="novalidate">
                <input
                    className={`${styles.contact_us__input} ${errorMessages ? styles['contact_us__input--error'] : ''}`}
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <textarea
                    className={`${styles.contact_us__textarea} ${errorMessages ? styles['contact_us__input--error'] : ''}`}
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message *"
                    required
                ></textarea>
                <div className={styles.contact_us__actions}>
                    <p className={styles.contact_us__error_messages}>{errorMessages || ''}</p>
                    <SendButton
                        text="Send Message"
                        onClick={handleSubmit}
                        isDisabled={!!errorMessages}
                    />
                </div>
            </form>
        </>
    );
};

export default Contact;
