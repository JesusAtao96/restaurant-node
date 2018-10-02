require('./config/config');

var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// BD
const db = require('./config/database');

db.connect();
var app = express();

app.use(logger('dev'));

// Parse application/json
app.use(express.json());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// Habilitar la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Habilitar cors
app.use(cors());

// Configuración global de rutas
app.use(require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

module.exports = app;
