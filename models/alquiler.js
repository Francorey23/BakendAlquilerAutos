'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Alquiler.belongsTo(models.Cliente,{
        foreignKey: 'clienteId',
        as: 'clientes',
        onUpdate: 'CASCADE'
      })
      Alquiler.belongsTo(models.Autos, {
        foreignKey:'autoId',
        as: 'autos',
        onUpdate: 'CASCADE'
      })
    }
  }
  Alquiler.init({
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
    clienteId: DataTypes.INTEGER,
    autoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Alquiler',
    tableName: 'alquilers'
  });
  return Alquiler;
};