import welcome from "cli-welcome";
import checkNode from "cli-check-node";
import unhandled from "cli-handle-unhandled";

import cli from "./cli.js";

export default () => {
  unhandled();

  welcome({
    title: cli.pkg.name,
    tagLine: "Hola!",
    description: cli.pkg.description,
    version: cli.pkg.version,
    bgColor: "#FADC00",
    bold: true,
    clear: true,
  });

  checkNode("10");
};
