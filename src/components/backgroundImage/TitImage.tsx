import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./backgroundImage.module.css";

const TitImage: React.FC = () => (
    <StaticImage className={styles.background_second}
        src="../../images/svg/Tit.svg"
        alt="Tit"
        placeholder="blurred"
        max-width={500}
        quality={100}
        layout="constrained" />
);

export default TitImage;
