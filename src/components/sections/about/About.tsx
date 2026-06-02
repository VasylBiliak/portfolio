import React, { useState, useEffect } from "react";
import * as styles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { fetchAboutData, clearCache } from "@/services/aboutService";
import { AboutData } from "@/types/about";

const About: React.FC = () => {
    const [data, setData] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const response = await fetchAboutData();
            
            if (response.error) {
                setError(response.error);
            } else {
                setData(response.data);
                setError(null);
            }
            
            setLoading(false);
        };

        loadData();
    }, []);

    if (loading) {
        return null;
    }

    if (error || !data) {
        return null;
    }

    const { description, imageAlt, imagePath } = data;

    return (
        <section className={styles.info_dp_section}>
            <div className={styles.about_info}>
                <p tabIndex={0}>
                    {description}
                </p>
            </div>
            <div className={styles.dp}>
                
                {/* <img className={styles.image} src={imagePath || "../../../images/Me.png"} alt={imageAlt || "My description"} />
 */}                
                <StaticImage className={styles.image}
                             src= "../../../images/Me.png"
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
