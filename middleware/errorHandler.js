const { logEvents } = require("./logEvents");
const errorHandler = (err, res, req, next) => {
    logEvents(`${err.name}: ${err.message}`, "errLog.txt")
    console.error(err.static);
    res.status(500).send(err.message);
}

module.exports = errorHandler;