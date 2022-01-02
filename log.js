const log4js = require("log4js");
const crypto = require("crypto")
log4js.configure({
  appenders: { cheese: { type: "file", filename: "math.log" }},
  categories: { default: { appenders: ["cheese"], level: "info" } }
});

const logger = log4js.getLogger("cheese");
const log = log4js.getLogger("number");

for (let index = 0; index < 100; index++) {
    for (let ind = 0; ind<100; ind++) {
        log.info(`${index} fois ${ind}=${index*ind}`)
        
    }   
    
}
