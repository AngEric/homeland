const Residence = require('../../controllers/v1/residence');

module.exports = (router) => {
  router.get('/residence', Residence.findAll);
};
