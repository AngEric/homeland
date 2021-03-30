'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_status_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      user_id: {
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
    await queryInterface.addIndex('user_status_history', ['user_id']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_status_history');
  },
};
