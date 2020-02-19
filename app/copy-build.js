var ncp = require('ncp').ncp;

ncp('www/', '../', (err) => {
    if (err) return console.error(err);

    console.log('Done!');
});