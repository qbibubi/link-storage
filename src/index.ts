import apiRouter from './routes/api';

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
    .catch((err: any) => console.log(err)); // Fix error type

const PORT = process.env.PORT || 5000;

app.use('/', express.static(path.join(__dirname, '../views'), { extensions: ['html'] } ));
app.use('/api', apiRouter);
app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));