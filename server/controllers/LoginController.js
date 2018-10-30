const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

function login(req, res) {
    let body = req.body;

    User.findOne({ email: body.email }, (err, userDB) => {
        if(err) {
            return res.status(500).json({ ok: false, err });
        }

        if(!userDB) {
            return res.status(400).json({ ok: false, err: { message: 'Incorrect username or password' } });
        }

        console.log(body.password, userDB.password);
        console.log(bcrypt.compareSync(body.password, userDB.password));
        if(!bcrypt.compareSync(body.password, userDB.password)) {
            return res.status(400).json({ ok: false, err: { message: 'Incorrect username or password' } });
        }

        let token = jwt.sign(
            { user: userDB },
            process.env.SEED,
            { expiresIn: process.env.TOKEN_EXPIRATION }
        );

        res.json({ ok: true, user: userDB, token });
    });
}

// Configuracioens de Google => https://developers.google.com/identity/sign-in/web/backend-auth
async function verify(token) {
    console.log(token, process.env.CLIENT_ID);
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();

    return {
        name: payload.name,
        email: payload.email,
        img: payload.picture,
        google: true
    };
}

async function google(req, res) {
    let token = req.body.idtoken;

    let googleUser = await verify(token).catch( e => {
        console.log('Error en la autenticación')
    });

    if(!googleUser) {
        return res.status(403).json({
            ok: false, 
            err: {
                message: 'Google auth error'
            }
        });
    }

    User.findOne({ email: googleUser.email }, (err, userDB) => {
        if(err) {
            return res.status(500).json({ ok: false, err });
        }

        if(userDB) {
            if(userDB.google === false) {
                return res.status(400).json({ 
                    ok: false, 
                    err: {
                        message: 'You must use your normal authentication'
                    }
                });
            } else {
                let token = jwt.sign(
                    { user: userDB },
                    process.env.SEED,
                    { expiresIn: process.env.TOKEN_EXPIRATION }
                );

                return res.json({
                    ok: true,
                    user: userDB,
                    token
                });
            }
        } else {
            // Si el usuario no existe en nuestra BD
            let user = new User();
            user.name = googleUser.name;
            user.email = googleUser.email;
            user.img = googleUser.img;
            user.google = true;
            user.password = ':)';

            user.save((err, userDB) => {
                if(err) {
                    return res.status(500).json({ ok: false, err });
                }

                let token = jwt.sign(
                    { user: userDB },
                    process.env.SEED,
                    { expiresIn: process.env.TOKEN_EXPIRATION }
                );

                return res.json({
                    ok: true,
                    user: userDB,
                    token
                });
            });
        }
    });
}

function facebook(req, res) {
    // do something with req.user
    //console.log(req.user._json.email);
    //res.json(req.user);

    let facebookUser = req.user;

    User.findOne({ email: req.user._json.email }, (err, userDB) => {
        if(err) {
            return res.status(500).json({ ok: false, err });
        }

        if(userDB) {
            if(userDB.facebook === false) {
                return res.status(400).json({ 
                    ok: false, 
                    err: {
                        message: 'You must use your normal authentication'
                    }
                });
            } else {
                let token = jwt.sign(
                    { user: userDB },
                    process.env.SEED,
                    { expiresIn: process.env.TOKEN_EXPIRATION }
                );

                return res.json({
                    ok: true,
                    user: userDB,
                    token
                });
            }
        } else {
            // Si el usuario no existe en nuestra BD
            let user = new User();
            user.name = facebookUser.displayName;
            user.email = facebookUser._json.email;
            user.img = facebookUser.photos[0].value;
            user.facebook = true;
            user.password = ':)';

            user.save((err, userDB) => {
                if(err) {
                    return res.status(500).json({ ok: false, err });
                }

                let token = jwt.sign(
                    { user: userDB },
                    process.env.SEED,
                    { expiresIn: process.env.TOKEN_EXPIRATION }
                );

                return res.json({
                    ok: true,
                    user: userDB,
                    token
                });
            });
        }
    });
}

module.exports = { login, google, facebook };