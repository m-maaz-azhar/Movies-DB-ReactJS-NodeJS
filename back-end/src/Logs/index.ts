import LoggerFactory from "./LoggerFactory";

export default function Log(res: any, req: any, next: any) {
  // Use the factory method to create a console logger
  const logger = LoggerFactory.create("console");
  // Use the factory method to create a file logger
  const fileLogger = LoggerFactory.create("file");

  let url = req?.req?.protocol + "://" + req?.req?.get("host") + req?.req?.originalUrl;

  logger.log(
    `${new Date()} ${url} `);

  fileLogger.log(`${new Date()} ${url} `);

  next();
}
