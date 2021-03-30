const database = require('../../databases/models');
const logger = require('../../services/logger');

module.exports = {
  findAll: async (req, res) => {
    try {
      const residences = await database.complaintTicket.findAll();
      return res.json({complaint_ticket_list: residences});
    } catch (err) {
      logger.error(`complaint-ticket.controller`, err);
      return res.status(500).json({message: res.__('error_internal_server')});
    }
  },
};
