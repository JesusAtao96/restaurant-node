const express = require('express');
const router = express.Router();

const usersController = require('../controllers/LoginController');

var passport = require('passport');
var FacebookTokenStrategy = require('passport-facebook-token');
passport.use(
    new FacebookTokenStrategy(
        {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET
        }, function(accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

router.route('/normal')
    .post(usersController.login);

router.route('/google')
    .post(usersController.google);

router.route('/facebook')
    .post(passport.authenticate('facebook-token', {session: false}), usersController.facebook);

module.exports = router;