import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./backgroundImage.module.css";

const OwlImage: React.FC = () => (
    <StaticImage className={styles.background_second}
        src="../../images/svg/Owl.svg"
        alt="Owl"
        placeholder="blurred"
        max-width={500}
        quality={100}
        layout="constrained" />
);

export default OwlImage;
