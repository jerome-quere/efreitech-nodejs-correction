const _ = require('lodash');

function __(name, defaultValue) {
    return _.get(process.env, name, defaultValue);
}

const config = {
    port: __("PORT", 8080),
    mongo: {
	uri: __("MONGO_URI", "mongodb://localhost:27017/golden-book")
    }
}

try {
    config = _.merge({}, config, require('./config.local.js'));
} catch (err) {
}

module.exports = config;
