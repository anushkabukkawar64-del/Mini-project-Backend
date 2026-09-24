const express = require("express");
const fs = require("fs");
const path = require("path");

const requestLogger = require("./middleware/requestLogger");

const app = express();

const PORT = Number(process.env.PORT) || 5001;
const logFilePath = path.join(__dirname, "logs.json");


app.use(requestLogger);


app.get("/products", (req, res) => {
  res.json({
    success: true,
    message: "Products page"
  });
});

app.get("/orders", (req, res) => {
  res.json({
    success: true,
    message: "Orders page"
  });
});


app.get("/customers", (req, res) => {
  res.json({
    success: true,
    message: "Customers page"
  });
});

app.get("/logs", (req, res) => {
  fs.readFile(logFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Unable to read logs"
      });
    }

    const logs = JSON.parse(data);

    res.json({
      success: true,
      count: logs.length,
      data: logs
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});