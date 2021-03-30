const database = require('../../databases/models');
const logger = require('../../services/logger');

module.exports = {
  findAll: async (req, res) => {
    try {
      const residences = await database.residence.findAll();
      return res.json({residence_list: residences});
    } catch (err) {
      logger.error(`user.controller`, err);
      return res.status(500).json({message: res.__('error_internal_server')});
    }
  },
};
