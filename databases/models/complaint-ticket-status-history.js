'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ComplaintTicketStatusHistory extends Model {
    static associate(models) {
      // define association here
    }
  }

  ComplaintTicketStatusHistory.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    ticket_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    old_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    new_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'complaintTicketStatusHistory',
    tableName: 'complaint_ticket_status_history',
    timestamps: false,
  });

  return ComplaintTicketStatusHistory;
};
