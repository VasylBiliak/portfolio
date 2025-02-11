import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Seo = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteTitle
                    siteDescription
                    siteUrl
                    siteImage
                    twitterUsername
                }
            }
        }
    `);

    const { siteMetadata } = site;
    const imageUrl = `${siteMetadata.siteUrl}${siteMetadata.siteImage}`;

    return (
        <>
            <title>{siteMetadata.siteTitle}</title>
            <meta name="description" content={siteMetadata.siteDescription} />
            <meta name="author" content="Vasyl Biliak" />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp, Discord, Telegram, Viber) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteMetadata.siteTitle} />
            <meta property="og:description" content={siteMetadata.siteDescription} />
            <meta property="og:url" content={siteMetadata.siteUrl} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:secure_url" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="627" />
            <meta property="og:site_name" content="Portfolio of Vasyl Biliak" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
            <meta name="twitter:title" content={siteMetadata.siteTitle} />
            <meta name="twitter:description" content={siteMetadata.siteDescription} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Pinterest (Rich Pins) */}
            <meta property="article:published_time" content="2025-02-09T12:00:00Z" />
            <meta property="article:author" content="Vasyl Biliak" />
            <meta name="pinterest-rich-pin" content="true" />

            {/* Discord Embed Color */}
            <meta name="theme-color" content="#ff6600" />
        </>
    );
};

export default Seo;
