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
    siteImage: `/images/my_main_img.jpg`,
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
        description: `A personal portfolio by Vasyl Biliak, showcasing development and design projects using modern web technologies like React and Gatsby!`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icons: [
          {
            src: `/favicons/favicon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
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
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
