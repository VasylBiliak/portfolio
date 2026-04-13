"use client";

import React from "react";
import * as styles from "./about.module.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Me.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            quality: 75
            formats: [AUTO, WEBP, AVIF]
            placeholder: NONE
          )
        }
      }
    }
  `);

  const image = getImage(data.file);

  return (
    <div className={styles.info_dp_section}>
      <div className={styles.about_info}>
        <p tabIndex={0}>
          In the past, I worked as a software developer for industrial controllers and created Human-Machine Interfaces (HMI panels).
          This experience gave me a solid understanding of the importance of adaptive and user-friendly interfaces. Now, I’m a freelance
          frontend developer, working with technologies such as JavaScript, Next.js, Gatsby, as well as React and TypeScript. In addition
          to development, I’m actively learning SEO and implementing best practices to improve website visibility in search engines. My goal
          is to create efficient and user-friendly solutions that meet the needs of users and align with modern web standards.
        </p>
      </div>

      <div className={styles.dp}>
        <GatsbyImage
          image={image}
          alt="Vasyl Biliak - Frontend Developer"
          loading="eager"
          className={styles.image}
          imgClassName={styles.image}
        />
      </div>
    </div>
  );
};

export default About;