"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./routes/api"));
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('e don connect'))
    .catch(err => console.log(err));
const PORT = process.env.PORT || 5000;
app.use('/', express.static(path.join(__dirname, '../views'), { extensions: ['html'] }));
app.use('/api', api_1.default);
app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
