import * as log from "log/mod.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler(
      Deno.env.get("DEBUG") ? "DEBUG" : "INFO",
    ),
  },
  loggers: {
    default: {
      level: "INFO",
      handlers: ["console"],
    },
    debug: {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

export function debug(msg: unknown, ...args: unknown[]): unknown {
  return log.getLogger("debug").debug(msg, ...args);
}

export function info(msg: unknown, ...args: unknown[]): unknown {
  return log.getLogger().info(msg, ...args);
}
