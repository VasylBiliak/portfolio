import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

import img from "../../images/favicons/favicon.ico"

const Helmet: React.FC = () => {
        return (
            <ReactHelmet>
                    <title>Vasyl Biliak Portfolio</title>
                    <meta name="description" content="Frontend developer with experience in React, TypeScript, and backend technologies like Node.js and Express.js. Strong background in embedded programming and web security." />
                    <meta name="keywords" content="Frontend Developer, React, TypeScript, Node.js, JavaScript, Vasyl Biliak, Web Development, Embedded Systems" />
                    <meta name="author" content="Vasyl Biliak" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/* Open Graph */}
                    <meta property="og:title" content="Vasyl Biliak Portfolio" />
                    <meta property="og:description" content="Frontend developer with experience in React, TypeScript, and backend technologies. Passionate about UI/UX and performance optimization." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://vasylbiliak.github.io/vasyl-biliak-portfolio/" />
                    <meta property="og:image" content="https://vasylbiliak.github.io/vasyl-biliak-portfolio/favicons/android-chrome-512x512.png" />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Vasyl Biliak Portfolio" />
                    <meta name="twitter:description" content="Frontend developer with experience in React, TypeScript, Node.js, and backend technologies." />
                    <meta name="twitter:image" content="https://vasylbiliak.github.io/vasyl-biliak-portfolio/favicons/android-chrome-512x512.png" />
                    <meta name="twitter:site" content="@vasyl_biliak" />

                {/* Favicon */}
                    <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
                    <link rel="icon" href="/favicons/android-chrome-192x192.png" sizes="192x192" type="image/png" />
                    <link rel="icon" href="/favicons/android-chrome-512x512.png" sizes="512x512" type="image/png" />
            </ReactHelmet>
        );
};

export default Helmet;
