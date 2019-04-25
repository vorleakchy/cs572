module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/users', users.create);

    app.get('/users/check_email_not_taken', users.checkEmailNotTaken);
}