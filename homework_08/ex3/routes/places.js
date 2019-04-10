const express = require('express');
const router = express.Router();
const Place = require('../place.js');

router.post('/places', (req, res) => {
    Place.create(req.body.data, () => {
        res.status(201).send({
            success: true,
            message: 'Places created successfully'
        })
    });
});

router.get('/places/search', (req, res) => {
    const options = { 
        category: req.query.category,
        name: req.query.name
    };

    Place.search(options, (places) => {
        res.json(places);
    });
});

module.exports = router;