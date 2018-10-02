const User = require('../models/User');
const bcrypt = require('bcrypt');

const buildParams = require('./helpers').buildParams;
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

function create(req, res) {
    let body = buildParams(validParams, req.body);

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((err, userDB) => {
        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({ ok: true, user: userDB });
    });
}

function update(req, res) {
    let id = req.params.id
    let body = buildParams(validParams, req.body);

    User.findByIdAndUpdate(id, body, {new: true, runValidators: true}, (err, userDB) => {
        if(err) {
            return res.status(400).json({ ok: false, err });
        }
        
        res.json({ ok: true, user: userDB });
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

module.exports = { index, create, update, destroy };