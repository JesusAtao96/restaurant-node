const express = require('express');

const app = express();

app.use('/users', require('./users'));
app.use('/login', require('./login'));
app.use('/restaurants', require('./restaurants'));
app.use('/comments', require('./comments'));

module.exports = app;