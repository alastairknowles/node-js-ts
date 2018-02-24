const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const winstonFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const winstonLogger = createLogger({
    format: combine(
      label({ label: 'NodeJs Typescript' }),
      timestamp(),
      winstonFormat
    ),
    transports: [new transports.Console()]
});

export class Logger {

    public static info(message: string, error?: Error): void {
        var combinedMessage: string = this.buildMessage(message, error);
        winstonLogger.info(combinedMessage);
    }

    public static error(message: string, error?: Error): void {
        var combinedMessage: string = this.buildMessage(message, error);
        winstonLogger.error(combinedMessage);
    }

    private static buildMessage(message: string, error?: Error): string {
        var combinedMessage = message;
        if (error) {
            combinedMessage += ": " + error;
        }

        return combinedMessage;
    }

}
