const User = require('../models/User');
const bcrypt = require('bcrypt');

const buildParams = require('./helpers').buildParams;
const validParamsCreate = ["name", "email", "password"];
const validParams = ["name", "email", "img", "state"];

function index(req, res) {
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 5;
    limit = Number(limit);

    //console.log('from, limit', from, limit);
    User.find({state: true}, 'name email state google img')
        .skip(from)
        .limit(limit)
        .exec((err, users) => {
            if(err) {
                return res.status(400).json({ ok: false, err });
            }

            User.countDocuments({state: true}, (err, count) => {
                res.json({ ok: true, count, users });
            })
        })
}

function find(req, res, next) {
    console.log(req.params.id)
    User.findOne({'_id': req.params.id}).then(user => {
        req.user = user;
        next();
    }).catch(err => {
        next(err);
    });
}

function create(req, res) {
    let params = buildParams(validParamsCreate, req.body);

    User.create(params)
        .then(userDB => {
            res.json({ ok: true, user: userDB });
        }).catch(err => {
            if(err) {
                return res.status(400).json({ ok: false, err });
            }
        })
}

function update(req, res) {
    // Actualizar un recurso
    const params = buildParams(validParams, req.body);

    req.user = Object.assign(req.user, params);

    req.user.save().then(userDB => { 
        res.json({ ok: true, user: userDB });
    }).catch(err => {
        return res.status(400).json({ ok: false, err });
    });
}

function destroy(req, res) {
    let id = req.params.id;
    
    let changeState = { state: false };

    // User.findByIdAndRemove(id, (err, userDelete) => {
    User.findByIdAndUpdate(id, changeState, {new: true}, (err, userDelete) => {
        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({ ok: true, user: userDelete });
    });
}

module.exports = { index, find, create, update, destroy };