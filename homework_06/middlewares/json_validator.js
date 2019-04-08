const jsonValidator = function(req, res, next) {
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
        next('Server requires valid JSON format');
    } else {
        next();
    }
};

module.exports = jsonValidator;