'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [{
      user: 'danfreitas',
      nome: 'Daniel Freitas',
      email: 'danfreitas@cabrero.com',
      senha: 'cabrunco',
      telefone: 5561992713489,
      linkedin: 'linkedin.com/danielofreitas',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      user: 'saulinduamassa',
      nome: 'Saulo Freitas',
      email: 'saulin@cabrero.com',
      senha: 'cabrunco',
      telefone: 40028922,
      linkedin: 'linkedin.com/saulindumal',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      user: 'Tonio',
      nome: 'Tonin da Pexera',
      email: 'tonin@cabrero.com',
      senha: 'cabrunco',
      telefone: 40028922,
      linkedin: 'linkedin.com/tonindumal',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      user: 'dunga',
      nome: 'Dunga Testudo',
      email: 'dunga@cabrero.com',
      senha: 'cabrunco',
      telefone: 40028922,
      linkedin: 'linkedin.com/mestredunga',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()    
    }
  ],
   {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
