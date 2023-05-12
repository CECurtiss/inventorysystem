const { Spirits } = require('../models');

const resolvers = {
    Query: {
        spirits: async () => {
            return await Spirits.find();
        }
    }
};

module.exports = resolvers;