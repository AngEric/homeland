const router = require('express').Router();

require('./residence')(router);
require('./user')(router);
require('./unit')(router);
require('./complaint-ticket')(router);

module.exports = router;
