var _ = require('lodash');
var configurator = require('./base').configurator;

var prod = {
    name: 'book-inventory-wiskra-test',
    config_vars: {
        name: "wiskra-test"
    }
};


var config = _.merge({}, require('./base').config, prod);
configurator(config);
