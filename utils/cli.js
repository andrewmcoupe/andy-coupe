import meow from "meow";
import chalk from "chalk";

const { green, yellow, cyan } = chalk;

const helpText = `
Usage
${green(`npx andy-coupe`)} ${yellow(`[options]`)} ${cyan(`<commands>`)}

Options
${yellow(`--social, -s`)}   Print social info
${yellow(`--no-social`)}    Don't include social info
${yellow(`--debug, -d`)}    Print debug info to the console
${yellow(`--version, -v`)}  Print the version

Commands
${cyan(`help`)}           Print CLI help info

Examples
$ npx andy-coupe --social
`;
const options = {
  importMeta: import.meta,
  flags: {
    social: {
      type: "boolean",
      default: true,
      alias: "s",
    },
    debug: {
      type: "boolean",
      default: false,
      alias: "d",
    },
    version: {
      type: "boolean",
      default: false,
      alias: "v",
    },
  },
};
const cli = meow(helpText, options);

export default cli;
