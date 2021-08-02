#!/usr/bin/env node
const chalk = require("chalk");
const init = require("./utils/init");

const twitterColor = chalk.hex("#1da1f2").bold;
const githubColor = chalk.green;
const blogColor = chalk.magenta;

(() => {
  init();

  console.log(`
  
  👋 ${chalk.magenta.inverse.bold(" Andy Coupe - Software Engineer ")} 👋
  
  ${chalk.green(`Thanks for npx'ing me and welcoming me into your terminal.`)}
  
    ===========
  
    ${chalk.italic(`I'm Andy Coupe, a software engineer based in Manchester, UK. 
    I'm currently working at Yozobi building cool things with cool technologies 
    like TypeScript, React, NodeJS, GraphQL, AWS and more!`)}
  
    ===========
  
  🐦 ${twitterColor(`Twitter`)}: ${chalk.dim(
    `https://twitter.com/andycoupedev`
  )}
  📖 ${githubColor(`GitHub`)}: ${chalk.dim(`https://github.com/andrewmcoupe`)}
  📝 ${blogColor(`Blog`)}: ${chalk.dim(`https://dev.to/andrewmcoupe`)}
  `);
})();
