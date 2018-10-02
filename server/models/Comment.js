const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = new Schema({
    comment: {
        type: String,
        required: [true, 'The comment is required']
    },
    rating: {
        type: Number,
        required: [true, 'The rating is required']
    },
    restaurant: {
        type: Schema.Types.ObjectId, 
        ref: 'Restaurant',
        required: [true, 'The restaurant is required']
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment', commentSchema);