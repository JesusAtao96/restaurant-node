const Restaurant = require('../models/Restaurant');

const buildParams = require('./helpers').buildParams;
const validParams = ["name", "description", "address", "capacity"];

function index(req, res) {
    Restaurant.find((err, restaurants) => {
        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        Restaurant.countDocuments({state: true}, (err, count) => {
            res.json({ ok: true, count, restaurants });
        })
    })
}

function only(req, res) {
    let id = req.params.id;

    Restaurant.findById(id, (err, restaurant) => {
        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({ ok: true, restaurant });
    })
}

function create(req, res) {
    let body = buildParams(validParams, req.body);

    let restaurant = new Restaurant({
        name: body.name,
        description: body.description,
        address: body.address,
        capacity: body.capacity
    });

    restaurant.save((err, restaurantDB) => {
        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({ ok: true, restaurant: restaurantDB});
    });
}

function update(req, res) {
    let id = req.params.id;
    let body = buildParams(validParams, req.body);

    Restaurant.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, restaurantDB) => {
        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({ ok: true, restaurant: restaurantDB })
    })
}

function destroy(req, res) {
    let id = req.params.id;
    
    Restaurant.findByIdAndRemove(id, (err, restaurantDelete) => {
        if(err) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({ ok: true, restaurant: restaurantDelete });
    })
}

module.exports = { index, only, create, update, destroy };