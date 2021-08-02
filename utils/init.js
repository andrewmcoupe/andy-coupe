const welcome = require("cli-welcome");
const checkNode = require("cli-check-node");
const unhandled = require("cli-handle-unhandled");

const packageJsonFile = require("../package.json");

module.exports = () => {
  unhandled();

  welcome({
    title: packageJsonFile.name,
    tagLine: "Hola!",
    description: packageJsonFile.description,
    version: packageJsonFile.version,
    bgColor: "#FADC00",
    bold: true,
    clear: true,
  });

  checkNode("10");
};
