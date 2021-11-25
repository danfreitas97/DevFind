'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('skills', [
    {
      skill: 'HTML',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'CSS',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'Javascript',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'Typescript',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'Java',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'C++',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'C#',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'Python',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'Go',
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      skill: 'Elixir',
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      skill: 'Ruby',
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      skill: 'Clojure',
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      skill: 'Rust',
      createdAt: new Date(),
      updatedAt: new Date()    
    }
  ],
   {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('skills', null, {});
    
  }
};
