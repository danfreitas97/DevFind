'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [{
      user: 'danfreitas',
      nome: 'Daniel Freitas',
      email: 'danfreitas@cabrero.com',
      senha: 'cabrunco',
      telefone: 40028922,
      linkedin: 'linkedin.com/danielofreitas',
      ativo: true,
      redefin: null,
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
      redefin: null,
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
      redefin: null,
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      user: 'dunga',
      nome: 'dunga testudo',
      email: 'dunga@cabrero.com',
      senha: 'cabrunco',
      telefone: 40028922,
      linkedin: 'linkedin.com/mestredunga',
      ativo: true,
      redefin: null,
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
