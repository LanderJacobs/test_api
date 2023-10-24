const mongoose = require('mongoose');

const hatReviewSchema = new mongoose.Schema({
    hatid: {type: Number},
    username: {type: String},
    rating: {type: Number},
    review: {type: String}
}, {
    collection: 'hatreview',
    versionKey: false
});

module.exports = mongoose.model("Review", hatReviewSchema);