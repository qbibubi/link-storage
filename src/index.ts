import { Request, Response } from "express";
import apiRouter from './routes/api';

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/', express.static(path.join(__dirname, '../views'), { extensions: ['html'] } ));

app.use('/api', apiRouter);

app.listen(PORT, console.log("Listening on port: " + PORT));