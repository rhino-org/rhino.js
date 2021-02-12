const auth         = require('./auth');
const middlewares  = require('./middlewares');
const store        = require('./store');
const url          = require('./router/url');
const router       = require('./router/router');
const EventEmitter = require('events');

module.exports = {
    auth,
    middlewares,
    store,
    url,
    router,
    events: new EventEmitter(),
};