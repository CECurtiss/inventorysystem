const { Schema, model } = require('mongoose');

const productSchema = new Schema({

    category: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    abv: {
        type: Number,
        required: true,
        trim: true,
    },
    package: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Package'
        }
    ]
});

const Products = model('Products', productSchema);

module.exports = Products