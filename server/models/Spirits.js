const { Schema, model } = require('mongoose');

const spiritsSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    size: {
        type: Number,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    abv: {
        type: Number,
        required: true,
        trim: true,
    },
});

module.exports = spiritsSchema
