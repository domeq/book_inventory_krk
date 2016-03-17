var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var config = {
    name: 'book-inventory-wiskra-test',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        MONGOLAB_URI: process.env.MONGOLAB_URI,
        name: "wiskra-test"
    },
    addons: {},
    collaborators: ['wojciech.iskra@schibsted.pl',
        'titzmateusz@gmail.com',
        'kzych.loop@gmail.com'],
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: false},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: []
};

configurator(config);
