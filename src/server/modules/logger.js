class Logger {
  constructor() {
    let winston = require('winston');

    let logger = new winston.Logger({
      transports: [
        new winston.transports.Console({
          timestamp: true,
          colorize: false,
          level: 'verbose',
          handleExceptions: true,
          humanReadableUnhandledException: true
        })
      ]
    });

    process.on('unhandledRejection', error => {
      logger.error('UNHANDLED REJECTION', error.stack);
    });

    return logger;
  }
}

module.exports = Logger;
