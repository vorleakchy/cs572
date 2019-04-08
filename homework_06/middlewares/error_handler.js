const errorHandler = (err, req, res, next) => {
    const statusCode = 500;

    res.status(statusCode).send({
        error: {
            code: statusCode,
            message: err
        }
    })
}

module.exports = errorHandler;