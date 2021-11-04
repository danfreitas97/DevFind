'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skills', {
      
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false
      },

      skill: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('skills');
  }
};