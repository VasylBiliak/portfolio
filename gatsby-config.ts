import type { GatsbyConfig, PluginRef } from "gatsby";
import "dotenv/config";

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Portfolio`,
    siteTitleAlt: `Portfolio of Vasyl Biliak`,
    siteHeadline: `Showcasing the Development and Design Work of Vasyl Biliak`,
    siteUrl: `https://vasylbiliak.github.io`,
    siteDescription: `A personal portfolio by Vasyl Biliak, featuring modern web development and design using cutting-edge technologies like React and Gatsby!`,
    siteImage: `/static/favicons/android-chrome-512x512.png`,
    siteLanguage: `en`,
    author: `VasylBiliak`,
  },
  pathPrefix: `/portfolio`,
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vasyl Biliak Portfolio`,
        short_name: `BV Portfolio`,
        description: `A personal portfolio by Vasyl Biliak, showcasing development and design
         projects using modern web technologies like React and Gatsby!`,
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
        display: 'swap',
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
    `gatsby-plugin-react-svg`
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
