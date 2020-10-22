'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCoins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserCoins.init({
    username: DataTypes.STRING,
    coins: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'UserCoins',
  });
  return UserCoins;
};