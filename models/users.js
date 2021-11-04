'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.skills, {
        through: 'user_skills',
        foreignKey: 'userId'
      })
    }
  };
  users.init({
    user: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    redefin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};