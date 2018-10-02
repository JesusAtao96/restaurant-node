const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let restaurantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    description: {
        type: String,
        required: [true, 'The description is required']
    },
    address: {
        type: String,
        required: [true, 'The address is required']
    },
    capacity: {
        type: Number,
        required: [true, 'The capacity is required']
    }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);