const ComplaintTicket = require('../../controllers/v1/complaint-ticket');

module.exports = (router) => {
  router.get('/complaint-ticket', ComplaintTicket.findAll);
};
