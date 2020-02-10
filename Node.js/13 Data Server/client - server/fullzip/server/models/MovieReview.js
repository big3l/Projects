const mongoose = require('mongoose');

const MovieReviewSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false,
        default: ' '
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const MovieReview = mongoose.model('Movies',MovieReviewSchema);

module.exports = MovieReview;