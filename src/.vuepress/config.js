const { description } = require("../../package");

module.exports = {
  title: "CitreaScan",
  description: description,

  head: [
    ["link", { rel: "icon", href: "/assets/favicon.png" }],
    ["meta", { name: "theme-color", content: "#F6741D" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],

  themeConfig: {
    repo: "CitreaScan/docs",
    logo: "/assets/logo.svg",
    editLinks: true,
    editLinkText: "Edit this page on Github",
    docsBranch: "develop",
    docsDir: "src",
    lastUpdated: true,

    nav: [
      {
        text: "CitreaScan",
        link: "https://citreascan.com/",
      },
    ],

    sidebar: [
      { title: "Overview", path: "/overview" },
      { title: "Getting Started", path: "/getting-started" },
      { title: "Network & RPC", path: "/network-rpc" },
      { title: "FAQ", path: "/faq" },
    ],
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
