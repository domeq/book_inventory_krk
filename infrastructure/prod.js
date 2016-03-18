var _ = require('lodash');
var configurator = require('./base').configurator;

var prod = {
    name: 'book-inventory-wiskra',
    config_vars: {
        name: "wiskra-prod"
    }
};


var config = _.merge({}, require('./base').config, prod);
configurator(config);
