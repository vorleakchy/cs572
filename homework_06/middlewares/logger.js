const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

module.exports = morgan('tiny', { stream: accessLogStream });