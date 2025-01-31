import React, { useState, useEffect } from 'react';
import { sendMessage } from './sendMessage';
import Modal from '../modal';
import * as styles from './contactUs.module.css';
import SendButton from '../sendButton';

const Contact: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });
    const [errorMessages, setErrorMessages] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor
        setIsMobile(/android|iphone|ipad|ipod|opera mini|blackberry|webos|windows phone/i.test(userAgent.toLowerCase()));
    }, []);

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
        // e.preventDefault();

        if (!formData.message || !formData.email) {
            setErrorMessages('Please fill in the form correctly!');
            return;
        }

        if (formData.email && !validateEmail(formData.email)) {
            setErrorMessages('Invalid email address :-(');
            return;
        }

        if (isMobile) {
            const smsNumber = '000000001';
            const smsMessage = `You can contact me via Email: ${formData.email}. Message: ${formData.message}`;
            window.location.href = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;
        }

        const message = `
        <b>Email:</b> ${formData.email || '-'} 
        <b>Message:</b> ${formData.message}
        `;

        try {
            // import.meta.env.VITE_APP_TOKEN , import.meta.env.VITE_APP_ID);
            // await sendMessage(message, "7531409596:AAGqTVXDMmc_7Okns0YINdbtHxLGtrbcFXE", "4721255399");
            await sendMessage(message, `7531409596:AAGqTVXDMmc_7Okns0YINdbtHxLGtrbcFXE`, 5528055309);
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
            <form className={styles.contact_us__form} id="contactForm" noValidate="novalidate">
                <form className={styles.contact_us__fields}>
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
            </form>
        </>
    );
};

export default Contact;
