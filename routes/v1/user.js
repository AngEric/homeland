const User = require('../../controllers/v1/user');

module.exports = (router) => {
  router.get('/user', User.findAll);
};
