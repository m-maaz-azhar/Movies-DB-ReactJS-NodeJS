import fs from "fs";

class LoggerFactory {
  // Factory method
  static create(type: string) {
    switch (type) {
      case 'console':
        return ConsoleLogger.getInstance();
      case 'file':
        return FileLogger.getInstance();
      default:
        throw new Error('Invalid logger type');
    }
  }

  log(message: string) {
    throw new Error('Method must be implemented by subclass');
  }
}

class ConsoleLogger extends LoggerFactory {
  // Singleton
  static instance: ConsoleLogger | null = null;

  static getInstance() {
    if (ConsoleLogger.instance === null) {
      ConsoleLogger.instance = new ConsoleLogger();
    }
    return ConsoleLogger.instance;
  }

  private constructor() {
    super();
    // Private constructor to prevent direct instantiation
  }

  log(message: string) {
    console.log(message);
  }
}

class FileLogger extends LoggerFactory {
  // Singleton
  static instance: FileLogger | null = null;

  static getInstance() {
    if (FileLogger.instance === null) {
      FileLogger.instance = new FileLogger();
    }
    return FileLogger.instance;
  }

  private constructor() {
    super();
    // Private constructor to prevent direct instantiation
  }

  log(message: string) {
    fs.writeFileSync("logs.txt", message);
  }
}

export default LoggerFactory;