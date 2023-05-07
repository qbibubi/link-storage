"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
router.get('/links', (req, res) => {
    res.json({
        "id": 1,
    });
});
router.patch('/links', (req, res) => {
    res.send('');
});
router.post('/links', (req, res) => {
    res.send('');
});
router.delete('/links', (req, res) => {
    res.send('');
});
exports.default = router;
