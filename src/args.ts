import * as Args from "flags/mod.ts";

export const args = Args.parse(Deno.args, {
  string: ["d", "t", "h"],
  alias: {
    h: "help",
    d: "destination",
    t: "template",
  },
  default: {
    d: undefined,
  },
});
