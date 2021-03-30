'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserUnitMap extends Model {
    static associate(models) {
      // define association here
    }
  }

  UserUnitMap.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    unit_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER(11),
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
    modelName: 'userUnitMap',
    tableName: 'user_unit_map',
    timestamps: false,
  });

  return UserUnitMap;
};
