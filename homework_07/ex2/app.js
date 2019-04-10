const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const secretRoute = require('./secret_route.js');

app.use('/', secretRoute);

app.listen(port, () => console.log(`Listening to ${port}`));