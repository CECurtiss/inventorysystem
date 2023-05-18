const { Schema, model } = require('mongoose');

const productSchema = new Schema({

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
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    package: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Package'
        }
    ]
});

const Products = model('Products', productSchema);

module.exports = Products