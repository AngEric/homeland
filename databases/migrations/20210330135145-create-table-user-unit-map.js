'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_unit_map', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      unit_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER(11),
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
    await queryInterface.addIndex('user_unit_map', ['unit_id']);
    await queryInterface.addIndex('user_unit_map', ['user_id']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_unit_map');
  },
};
