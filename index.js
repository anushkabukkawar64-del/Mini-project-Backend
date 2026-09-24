const express = require("express");
const fs = require("fs");
const requestLogger = require("./middleware/requestLogger");

const app = express();
const PORT = 5000;

app.use(requestLogger);

app.get("/products", (req, res) => {
    res.json({ success: true, message: "Products page" });
});

app.get("/orders", (req, res) => {
    res.json({ success: true, message: "Orders page" });
});

app.get("/customers", (req, res) => {
    res.json({ success: true, message: "Customers page" });
});

app.get("/logs", (req, res) => {
    const logs = JSON.parse(fs.readFileSync("logs.json", "utf8"));

    res.json({
        success: true,
        count: logs.length,
        data: logs
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
