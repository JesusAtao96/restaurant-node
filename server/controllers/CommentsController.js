const Comment = require('../models/Comment');

const buildParams = require('./helpers').buildParams;
const validParams = ['comment', 'rating', 'restaurant'];

function index(req, res) {
    Comment.find()
        .populate('user', 'name email img')
        .populate('restaurant', 'name description address capacity')
        .exec((err, comments) => {
            if(err) {
                return res.status(500).json({ ok: false, err });
            }
    
            res.json({
                ok: true, comments
            });
        });
}

function only(req, res) {
    let id = req.params.id;
    Comment.find({ restaurant: id })
        .populate('restaurant', 'name description address capacity')
        .exec((err, comments) => {
            if(err) {
                return res.status(500).json({ ok: false, err });
            }
    
            res.json({
                ok: true, comments
            });
        });
}

function create(req, res) {
    let body = req.body;

    let comment = new Comment({
        comment: body.comment,
        rating: body.rating,
        restaurant: body.restaurant,
        user: req.user._id
    });

    Comment.populate(comment, {path: 'restaurant'}, function (err, restaurant) {
        if(err) {
            return res.status(500).json({ ok: false, err });
        }

        if(!restaurant) {
            return res.status(400).json({ ok: false, err });
        }
    });

    comment.save((err, commentDB) => {
        if(err) {
            return res.status(500).json({ ok: false, err });
        }

        if(!commentDB) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({
            ok: true,
            comment: commentDB
        });
    });
}

function update(req, res) {
    let id = req.params.id;
    let body = buildParams(validParams, req.body);

    Comment.findById(id, (err, commentsDB) => {

        if(!commentsDB) {
            return res.status(400).json({ ok: false, err: { message: 'The comment doesnt exist' } });
        }

        if(commentsDB.user != req.user._id) {
            return res.status(400).json({ ok: false, err: { message: 'The comment doesnt exist' } });
        }

        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        Comment.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, commentsDB) => {
            if(err) {
                return res.status(400).json({ ok: false, err });
            }
    
            res.json({ ok: true, comment: commentsDB })
        });
    })
}

function destroy(req, res) {
    let id = req.params.id;

    Comment.findById(id, (err, commentsDB) => {
        if(!commentsDB) {
            return res.status(400).json({ ok: false, err: { message: 'The comment doesnt exist' } });
        }

        if(commentsDB.user != req.user._id) {
            return res.status(400).json({ ok: false, err: { message: 'The comment doesnt exist' } });
        }

        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        Comment.findByIdAndRemove(id, (err, commentsDB) => {
            if(err) {
                return res.status(400).json({ ok: false, err });
            }
    
            res.json({ ok: true, comment: commentsDB })
        });
    })
}

module.exports = { index, only, create, update, destroy };