#!/usr/bin/env node
const welcome = require("cli-welcome");
const packageJsonFile = require("./package.json");

welcome({
  title: packageJsonFile.name,
  tagLine: "Hola!",
  description: packageJsonFile.description,
  version: packageJsonFile.version,
  bgColor: "#FADC00",
  bold: true,
  clear: true,
});

console.log(`
👋 Andy Coupe - Software Engineer 👋

Thanks for npx'ing me and welcoming me into your terminal.

  ===========

  I'm Andy Coupe, a software engineer based in Manchester, UK. 
  I'm currently working at Yozobi building cool things with cool technologies 
  such as TypeScript, React, NodeJS, GraphQL, AWS and more!

  I love ⚽️ and I'm a big fan of Liverpool FC. I'm also the proud owner 
  of a Siberian Husky named Ice! 🧊

  Find out more about me using 
  my social links below 👇

  ===========

🐦 Twitter: https://twitter.com/andycoupedev
📖 GitHub: https://github.com/andrewmcoupe
📝 Blog: https://dev.to/andrewmcoupe
`);
