import alert from "cli-alerts";

export const debug = (cli) => {
  if (!cli.flags.debug) return;

  alert({ type: "info", msg: "DEBUGGING INFO" });
  console.log(cli);
  console.log(`input`, cli.input);
  console.log(`flags`, cli.flags);
};
