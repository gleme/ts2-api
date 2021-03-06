const express = require('express');
const path = require('path');

/**
 * Standard Middlewares
 */
const boom = require('express-boom');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const log4js = require('log4js');
const { getLogger } = require('./services/logger.service');

/**
 * Main Routes
 */
const apiRouter = require('./routes/index');

const logger = getLogger('api');
const app = express();

/**
 * Middlewares Settings
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(cookieParser());
app.use(boom());
app.use(log4js.connectLogger(logger));

app.use('/api', apiRouter);

/**
 * Catch 404 Errors
 */
app.use((req, res, next) => {
    next(res.boom.notFound());
});

/**
 * Default Error Handler
 */
app.use((error, req, res) => {
    if (req.app.get('env') === 'development') {
        logger.error(error);
    }
    // set locals, only providing error in development
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};
    res.boom.badRequest('Bad Request', error);
});

module.exports = app;
