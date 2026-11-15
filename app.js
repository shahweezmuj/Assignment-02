
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var portfolioRouter = require('./controllers');
var expressLayouts = require('express-ejs-layouts');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// EJS layout setup
app.use(expressLayouts);
app.set('layout', 'layout');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Public folder for CSS, JavaScript, images and other assets
app.use(express.static(path.join(__dirname, 'public')));

// Portfolio routes
app.use('/', portfolioRouter);

// Catch 404 errors
app.use(function(req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
