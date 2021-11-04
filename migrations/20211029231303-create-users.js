'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {

      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false
      },

      user: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      redefin: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};