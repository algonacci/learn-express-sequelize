'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetailTransaction.init({
    transaction: DataTypes.STRING,
    user: DataTypes.INTEGER,
    book: DataTypes.INTEGER,
    bookTitle: DataTypes.STRING,
    bookImage: DataTypes.STRING,
    bookPrice: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailTransaction',
  });
  return DetailTransaction;
};