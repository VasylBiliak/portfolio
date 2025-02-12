import type { GatsbyConfig, PluginRef } from "gatsby";
import "dotenv/config";

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Portfolio of Vasyl Biliak`,
    siteTitleAlt: `Portfolio of Vasyl Biliak`,
    siteHeadline: `Showcasing the Full-Stack Development and UI/UX Expertise of Vasyl Biliak`,
    siteUrl: `https://vasylbiliak.github.io`,
    siteDescription: `Freelance full-stack developer with experience in creating adaptive, user-friendly interfaces and building scalable, efficient web applications using modern technologies like JavaScript, React, Node.js, and databases such as PostgreSQL, MySQL, and MongoDB.`,
    siteImage: `/portfolio/siteImg.jpg`,
    siteLanguage: `en`,
    author: `VasylBiliak`,
    twitterUsername: `@vasyl_biliak`,
    linkedin: `https://www.linkedin.com/in/vasyl-biliak-developer`,
    github: `https://github.com/VasylBiliak`,
    instagram: `https://www.instagram.com/vasyl_biliak`,
  },
  pathPrefix: `/portfolio`,
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vasyl Biliak Portfolio`,
        short_name: `VB Portfolio`,
        description: `A portfolio of Vasyl Biliak, a freelance developer specializing in frontend and backend development with cutting-edge web technologies, delivering user-centric and scalable solutions.`,
        start_url: `/portfolio`,
        background_color: `#0f7878`,
        display: `standalone`,
        icon: `src/images/favicons/android-chrome-512x512.png`,
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:,500,700`,
          `Orbitron\:400,500,700`,
          `Comfortaa\:300,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-svg`,
  ].filter(Boolean) as Array<PluginRef>,
  graphqlTypegen: {
    typesOutputPath: `./src/types/graphql-types.d.ts`,
    generateOnBuild: true,
  },
};

export default config;
