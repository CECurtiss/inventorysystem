const db = require('../config/connection');
const { Products } = require('../models');
const productSeeds = require('./productSeeds.json');

db.once('open', async () => {
    try {
        await Products.deleteMany({});
        await Products.create(productSeeds);
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });