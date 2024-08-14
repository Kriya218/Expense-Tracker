'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Record.belongsTo(models.User),
      Record.belongsTo(models.Category)
    }
  }
  Record.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue:DataTypes.NOW
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false  
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Record',
  });
  return Record;
};