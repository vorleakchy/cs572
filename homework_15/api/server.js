const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to API using Node."});
});

require('./app/routes/user.routes.js')(app);

app.listen(port, () => `Server is listening on port ${port}`);