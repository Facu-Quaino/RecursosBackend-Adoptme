import winston from "winston";
import { option } from "../config/commander.js";


const  customLevelsOptions = {
    levels:{  
        fatal:0,
        error:1,
        warn:2,
        info:3,
        http:4,
        debug:5
    },
    colors:{
        fatal: "red",
        error: "red",
        warn:"yellow",
        info:"green",
        http:"magenta",
        debug:"blue"
    }
}

const loggerProduction = winston.createLogger({
    levels:customLevelsOptions.levels,
    transports:[
        new winston.transports.File({filename:"combined.log",level:"warn"})
    ]
})

const loggerDevelopment = winston.createLogger({
    levels:customLevelsOptions.levels,
    transports:[
        new winston.transports.Console({
            level:"debug",
            format:winston.format.combine(
                winston.format.colorize({colors:customLevelsOptions.colors}),
                winston.format.simple()
            )
        })
    ]
})

export const logger = option.logger === "PRODUCTION" ? loggerProduction : loggerDevelopment;

export const addLogger = (req, res, next) => {
    req.logger = option.logger === "PRODUCTION" ? loggerProduction : loggerDevelopment; 
    req.logger.http(`${req.method} -  ${req.url} - ${new Date().toLocaleTimeString()}`);
    next();
}