const express = require('express');
const router = express.Router();
const Lecture = require('../models/lecture.js');

router.post('/search/:q', (req, res) => {
    Lecture.search(req.params.q, (lectures) => {
        res.status(200).send({
            data: lectures
        });
    })
});

module.exports = router;