'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('complaint_ticket_status_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      ticket_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      old_status: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
      },
      new_status: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addIndex('complaint_ticket_status_history', ['ticket_id']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('complaint_ticket_status_history');
  },
};
