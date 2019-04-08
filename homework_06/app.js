const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const logger = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/error_handler.js');
const jsonValidator = require('./middlewares/json_validator.js');
const gradeRoute = require('./routes/grade_route.js');

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(jsonValidator);

app.use('/', gradeRoute);

app.use(errorHandler);

app.listen(port, () => console.log(`Listening to ${port}`));