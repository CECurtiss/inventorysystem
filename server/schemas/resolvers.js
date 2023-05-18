const { Products } = require('../models');

const resolvers = {
    Query: {
        product: async () => {
            return await Products.find();
        }
    }
};

module.exports = resolvers;