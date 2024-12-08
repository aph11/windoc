// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Windoc',
  tagline: 'Documentation pour les sports nautiques',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://windoc.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AlexC', // Usually your GitHub org/user name.
  projectName: 'Windoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Windoc',
        logo: {
          alt: 'Logo de Windoc',
          src: 'img/logo.svg',
        },
        items: [
          { label: "Windsurf", type: 'docSidebar', sidebarId: 'windsurfSidebar', to: "docs/windsurf", position: "left", },
          { label: "Voile", type: 'docSidebar', sidebarId: 'voileSidebar', to: 'docs/voile', position: 'left', },
          { label: "Méteo", type: 'docSidebar', sidebarId: 'meteoSidebar', to: "docs/meteo", position: "left", },
          { href: 'https://github.com/aph11/windoc', label: 'GitHub', position: 'right', },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
