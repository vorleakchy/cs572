const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const placeRoute = require('./routes/places.js');

app.use(express.json());

app.use('/', placeRoute);

app.listen(port, () => `Listening to ${port}`);