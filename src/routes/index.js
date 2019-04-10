const express = require('express');
const router = express.Router();
const physicianRouter = require('./physician');

router.use('/physician', physicianRouter);

router.get('/', (req, res) => {
    res.status(200).end();
});

module.exports = router;
