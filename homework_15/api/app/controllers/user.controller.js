const User = require('../models/user.model.js');

exports.create = (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    user.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message
        }));
};

exports.checkEmailNotTaken = (req, res) => {
    User.findOne({email: req.query.email})
        .then(data => {
            if (data)
                res.json({emailNotTaken: false})
            else
                res.json({emailNotTaken: true})
        })
};