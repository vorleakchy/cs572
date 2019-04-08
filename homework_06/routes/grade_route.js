const express = require('express');
const router = express.Router();
const Grade = require('../data/grade.js');

router.get('/grades/:id', (req, res) => {
    const grade = Grade.find(req.params.id);
    res.status(200).send({ data: grade });
});

router.get('/grades', (req, res) => {
    const grades = Grade.all();
    res.status(200).send({ data: grades });
});

router.post('/grades', (req, res) => {
    const grade = Grade.create(req.body.data);
    res.status(201).send({
        data: grade,
        success: true,
        message: 'Grade created successfully'
    });
});

router.delete('/grades/:id', (req, res) => {
    const id = req.params.id;
    const grade = Grade.find(id);

    if (grade.id) {
        Grade.delete(grade.id);
        return res.status(200).send({
            success: true,
            message: 'Grade deleted successfully'
        });
    }

    return res.status(404).send({
        success: false,
        message: 'Grade not found'
    });
});

module.exports = router;