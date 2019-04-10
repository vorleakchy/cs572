const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const lectureRoute = require('./routes/lectures.js');
const searchRoute = require('./routes/search.js');

app.use(express.json());

app.use('/', lectureRoute);
app.use('/', searchRoute);

app.listen(port, () => `Listening to ${port}`);