'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_game_biodata.belongsTo(models.user_game, {foreignKey : 'user_id', as : 'user_biodata'})
    }
  };
  user_game_biodata.init({
    namaLengkap: DataTypes.STRING,
    alamat: DataTypes.STRING,
    noHp: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_game_biodata',
  });
  return user_game_biodata;
};