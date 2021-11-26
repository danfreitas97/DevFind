const express = require('express');
const busca = require('./busca.js');
const cadastro = require('./cadastro.js');
const perfil = require('./perfil.js');
const login = require('./login.js');
const admskill = require('./admSkills.js');

module.exports = app => {

    app.use(admskill)
    app.use(busca)
    app.use(cadastro)
    app.use(login)
    app.use(perfil)

    app.get('/', (req, res) => res.send('Bem vindo à API Dev.Find'))

}

