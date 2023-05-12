const db = require('../config/connection');
const { Spirits } = require('../models');
const spiritsSeeds = require('./spiritsSeeds.json');

db.once('open', async () => {
    try {
        await Spirits.remove({});
        await Spirits.create(spiritsSeeds);
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });