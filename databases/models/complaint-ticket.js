'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ComplaintTicket extends Model {
    static associate(models) {
      // define association here
    }
  }

  ComplaintTicket.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(1024),
      allowNull: false,
    },
    status: {
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
    modelName: 'complaintTicket',
    tableName: 'complaint_ticket',
    timestamps: false,
  });

  return ComplaintTicket;
};
