'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('user_skills', [
    {
      userId: 'danfreitas',
      skillId: 'HTML',
      nivel: 'junior',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      userId: 'danfreitas',
      skillId: 'CSS',
      nivel: 'senior',
      createdAt: new Date(),
      updatedAt: new Date()   
    },

    {
      userId: 'saulinduamassa',
      skillId: 'Java',
      nivel: 'senior',
      createdAt: new Date(),
      updatedAt: new Date()   
    },

    {
      userId: 'saulinduamassa',
      skillId: 'Python',
      nivel: 'senior',
      createdAt: new Date(),
      updatedAt: new Date()   
    },

    {
      userId: 'Tonio',
      skillId: 'C#',
      nivel: 'pleno',
      createdAt: new Date(),
      updatedAt: new Date()   
    },

    {
      userId: 'Tonio',
      skillId: 'Java',
      nivel: 'junior',
      createdAt: new Date(),
      updatedAt: new Date()  
    },

    {
      userId: 'dunga',
      skillId: 'CSS',
      nivel: 'pleno',
      createdAt: new Date(),
      updatedAt: new Date()  
    },

  ],
   {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_skills', null, {});
    
  }
};
