'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserStatusHistory extends Model {
    static associate(models) {
      // define association here
    }
  }

  UserStatusHistory.init({
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
    modelName: 'userStatusHistory',
    tableName: 'user_status_history',
    timestamps: false,
  });

  return UserStatusHistory;
};
