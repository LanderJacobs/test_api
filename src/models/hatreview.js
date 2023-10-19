const mongoose = require('mongoose');

const hatReviewSchema = new mongoose.Schema({
    hatid: {type: String},
    username: {type: String},
    rating: {type: String},
    review: {type: String}
}, {
    collection: 'hatreview'
});

module.exports = mongoose.model("Review", hatReviewSchema);