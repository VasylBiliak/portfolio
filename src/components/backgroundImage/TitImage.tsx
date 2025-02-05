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
                left: "24.4%",
                top: "11.5%",
                width: "5%",
                height: "5%",
                borderRadius: "50%",
            }}
            pupilStyle={{
                width: "45%",
                height: "45%",
                background: "var(#095E5EFF)",
                borderRadius: "50%",
            }}
        />
        <StaticImage
            src="../../images/svg/TIT.svg"
            alt="Tit"
            placeholder="blurred"
            max-width={500}
            quality={100}
            layout="constrained"
        />
    </div>
);

export default TitImage;
