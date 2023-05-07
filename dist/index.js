"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./routes/api"));
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
app.use('/', express.static(path.join(__dirname, '../views'), { extensions: ['html'] }));
app.use('/api', api_1.default);
app.listen(PORT, console.log("Listening on port: " + PORT));
