const express = require('express');
const router = express.Router();
const Lecture = require('../models/lecture.js');

router.get('/lectures', (req, res) => {
    Lecture.all((lectures) => {
        res.status(200).send({
            data: lectures
        });
    })
});

router.get('/lectures/:id', (req, res) => {
    Lecture.findById(req.params.id, (lecture) => {
        res.status(200).send({
            data: lecture
        });
    })
});

router.post('/lectures', (req, res) => {
    Lecture.create(req.body.data, (lecture) => {
        res.status(201).send({
            data: lecture,
            success: true,
            message: 'Lecture created successfully'
        });
    });
});

router.put('/lectures/:id', (req, res) => {
    Lecture.update(req.params.id, req.body.data, () => {
        res.status(200).send({
            success: true,
            message: 'Lecture updated successfully'
        });
    });
});

router.delete('/lectures/:id', (req, res) => {
    Lecture.delete(req.params.id, () => {
        res.status(200).send({
            success: true,
            message: 'Lecture deleted successfully'
        });
    });
});

module.exports = router;