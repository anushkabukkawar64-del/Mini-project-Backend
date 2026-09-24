const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "..", "logs.json");

const requestLogger = (req, res, next) => {
  if (req.url === "/logs") {
    return next();
  }

  const newLog = {
    method: req.method,
    url: req.url,
    time: new Date().toISOString()
  };

  fs.readFile(logFilePath, "utf8", (err, data) => {
    let logs = [];

    if (!err && data) {
    try {
        logs = JSON.parse(data);
    } catch (error) {
        logs = [];
    }
    }

    logs.push(newLog);

    fs.writeFile(
    logFilePath,
    JSON.stringify(logs, null, 2),
    (writeErr) => {
        if (writeErr) {
    console.error("Error writing log:", writeErr);
}

        next();
}
    );
});
};

module.exports = requestLogger; 
