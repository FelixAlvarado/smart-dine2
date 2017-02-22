"use strict";
var mongoose = require("mongoose");
var placeSchema = new mongoose.Schema({
    name: String,
    type: {
        type: String,
        enum: ['American', 'Chinese', 'Japanese', 'Mediterranean', 'Mexican']
    },
    rating: Number,
    food: Number,
    service: Number,
    decor: Number,
    comment: String,
    style: {
        type: String,
        enum: ['Full Service', 'Counter Service', 'Fast Food']
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Place', placeSchema);
