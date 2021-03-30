const Unit = require('../../controllers/v1/unit');

module.exports = (router) => {
  router.get('/unit', Unit.findAll);
};
