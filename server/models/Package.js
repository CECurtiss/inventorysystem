const { Schema, model } = require('mongoose');

const packageSchema = new Schema({

    size: {
        type: Number,
        required: true,
        trim: true,
    },
    perCase: {
        type: Number,
        required: true,
        trim: true,
    },
    inStock: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});

const Package = model('Package', packageSchema);

module.exports = Package