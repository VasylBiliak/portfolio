import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

const Helmet: React.FC = () => {
    return (
        <ReactHelmet>
            <title>Vasyl Biliak Portfolio</title>
            <meta name="description" content="Frontend developer specializing in React, TypeScript, and modern web technologies." />
            <meta name="keywords" content="Frontend Developer, React, TypeScript, Vasyl Biliak" />
            <meta name="author" content="Vasyl Biliak" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Open Graph */}
            <meta property="og:title" content="Vasyl Biliak Portfolio" />
            <meta property="og:description" content="Frontend developer specializing in React, TypeScript, and modern web technologies." />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Vasyl Biliak Portfolio" />
            <meta name="twitter:description" content="Frontend developer specializing in React, TypeScript, and modern web technologies." />
        </ReactHelmet>
    );
};

export default Helmet;
