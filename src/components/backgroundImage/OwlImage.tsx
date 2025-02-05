import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./backgroundImage.module.css";
import Eye from "./Eye";

const OwlImage: React.FC = () => (
    <div className={styles.background_second}>
        <Eye
            className={styles.container_svg}
            eyeStyle={{
                // boxShadow: "inset 0 0 5px rgb(255, 0, 0)",
                position: "absolute",
                left: "35.5%",
                top: "12.5%",
                width: "9%",
                height: "8%",
                borderRadius: "50%",
            }}
            pupilStyle={{
                width: "40%",
                height: "40%",
                background: "var(--color-yellow)",
                borderRadius: "50%",
            }}
        />
        <Eye
            className={styles.container_svg}
            eyeStyle={{
                // boxShadow: "inset 0 0 5px rgb(255, 0, 0)",
                position: "absolute",
                left: "51.5%",
                top: "13.1%",
                width: "6.3%",
                height: "6.2%",
                borderRadius: "50%",
            }}
            pupilStyle={{
                width: "50%",
                height: "50%",
                background: "var(--color-yellow)",
                borderRadius: "50%",
            }}
        />
        <StaticImage
            src="../../images/svg/Owl.svg"
            alt="Owl"
            placeholder="blurred"
            max-width={500}
            quality={100}
            layout="constrained" />
    </div>
);

export default OwlImage;
