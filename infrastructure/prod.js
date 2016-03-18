var _ = require('lodash');
var configurator = require('./base').configurator;

var prod = {
    name: 'book-inventory-wiskra',
    log_drains: ['syslog://data.logentries.com:13636'],
    config_vars: {
        name: "wiskra-prod"
    }
};


var config = _.merge({}, require('./base').config, prod);
configurator(config);
