'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_skills', {
      
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false
      },
   
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
        references: {model: 'users', key: 'user'},
      },

      skillId: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
        references: {model: 'skills', key: 'skill'},
      },

      nivel: {
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
    await queryInterface.dropTable('user_skills');
  }
};