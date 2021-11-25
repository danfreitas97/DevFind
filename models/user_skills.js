'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  };
  user_skills.init({
    nivel: DataTypes.STRING,

    userId: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
      references: {model: 'users', key: 'user'},
    },

    skillId: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
      references: {model: 'skills', key: 'skill'},
    }
  },
  
  {
    sequelize,
    modelName: 'user_skills',
  });
  return user_skills;
};