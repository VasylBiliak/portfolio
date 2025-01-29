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
    siteImage: `./static/favicons/android-chrome-192x192.png`,
    siteLanguage: `en`,
    author: `VasylBiliak`,
  },
  pathPrefix: `/vasyl-biliak-portfolio`,
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vasyl Biliak Portfolio`,
        short_name: `Portfolio`,
        description: `A personal portfolio by Vasyl Biliak, showcasing development and design
         projects using modern web technologies like React and Gatsby!`,
        start_url: `/vasyl-biliak-portfolio`,
        background_color: `#141821`,
        display: `standalone`,
        icons: [
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon.ico`,
            sizes: `48x48`,
            type: `image/x-icon`,
          },
        ],
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
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
