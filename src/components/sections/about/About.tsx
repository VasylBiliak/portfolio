import React from "react";
import * as styles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

interface AboutProps {
    data: {
        aboutSheet: {
            data: {
                description: string;
                imageAlt: string;
                imagePath: string;
            };
        };
    };
}

const About: React.FC<AboutProps> = ({ data }) => {
    const { description, imageAlt, imagePath } = data.aboutSheet.data || {};

    if (!description) {
        return null;
    }

    return (
        <section className={styles.info_dp_section}>
            <div className={styles.about_info}>
                <p tabIndex={0}>
                    {description}
                </p>
            </div>
            <div className={styles.dp}>
                <StaticImage className={styles.image}
                             src={imagePath || "../../../images/Me.png"}
                             alt={imageAlt || "My description"}
                             placeholder="blurred"
                             max-width={500}
                             quality={100}
                             layout="constrained"
                />
            </div>
        </section>
    );
};

export default About;

export const query = graphql`
    query AboutQuery {
        aboutSheet(name: { eq: "about" }) {
            data {
                description
                imageAlt
                imagePath
            }
        }
    }
`;
