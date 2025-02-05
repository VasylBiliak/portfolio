import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Eye from "./Eye";
import * as styles from "./backgroundImage.module.css";

const TitImage: React.FC = () => (
    <div className={styles.background_second}>
        <Eye
            className={styles.container_svg}
            eyeStyle={{
                boxShadow: "inset 0 0 5px rgba(11, 58, 20, 0.18)",
                position: "absolute",
                left: "19.03%",
                top: "9.95%",
                width: "4.6%",
                height: "4.6%",
                borderRadius: "50%",
            }}
            pupilStyle={{
                width: "55%",
                height: "55%",
                background: "var(#095E5EFF)",
                borderRadius: "50%",
            }}
        />
        <StaticImage
            src="../../images/svg/TIT-2.svg"
            alt="Tit"
            placeholder="blurred"
            max-width={500}
            quality={100}
            layout="constrained"
        />
    </div>
);

export default TitImage;
