// components/ui/QRCodeButton/QRCodeButton.tsx
import React from "react";
import QRCode from "@components/utils/QRCode/QRCode";
import * as styles from "./QRCodeButton.module.css";

interface QRCodeButtonProps {
    url: string;
    children: React.ReactNode;
}

const QRCodeButton: React.FC<QRCodeButtonProps> = ({ url, children }) => {
    return (
        <div className={styles.qrButtonWrapper}>
            <div className={styles.qrCode}>
                <QRCode repoUrl={url} />
            </div>
            {children}
        </div>
    );
};

export default QRCodeButton;
