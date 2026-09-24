# Q8 - Request Logger Using Express Middleware

## Description

This project implements a custom Express middleware that logs every API request into a `logs.json` file.

Each log entry contains:

- HTTP method
- Request URL
- Date and time of the request

The `/logs` endpoint is not logged.

---

## Project Structure

q8-request-logger/

├── index.js
├── logs.json
├── package.json
├── package-lock.json
├── README.md
├── middleware/
│   └── requestLogger.js

---