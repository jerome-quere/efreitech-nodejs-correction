const
    _ = require('lodash'),
    request = require('request-promise'),
    redis = require("redis"),
    bluebird = require('bluebird')
;

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const
    redisClient = redis.createClient()
;

function getOrFetch (key, expire, fetcher) {

    return redisClient.getAsync(key).then(value => {
        if (value)
            return JSON.parse(value);

        return fetcher()
            .then((v) => value = v)
            .then(() => redisClient.setAsync(key, JSON.stringify(value)))
            .then(() => redisClient.expireAsync(key, expire))
            .then(() => value)
        ;
    });
}

function getRedditPost(thread) {

    return getOrFetch(`posts-${thread}`, 30, () => request({ uri: `https://www.reddit.com/r/${thread}.json`, json: true }))
        .then((body) => {
            return _(body.data.children)
                .filter("data.url")
                .map("data.url")
                .value()
            ;
        })
    ;
}

module.exports = getRedditPost;