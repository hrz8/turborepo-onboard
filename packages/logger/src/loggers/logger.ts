import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  level: "info",
  exitOnError: false,
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(
        format.simple(),
        format.printf(({level, ...payload}) => {
          const {message} = Object.assign({}, payload);
          return `[${level.toUpperCase()}] ${message}`;
        })
      )
    })
  ]
});
