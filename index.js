#!/usr/bin/env node
import init from "./utils/init.js";
import data from "./utils/data.js";
import cli from "./utils/cli.js";
import { debug } from "./utils/debug.js";

(() => {
  init();
  cli.input.includes("help") && cli.showHelp(0);

  console.log(data.bio);

  if (cli.flags.social) {
    console.log(data.socialInfo);
  }

  debug(cli);
})();
