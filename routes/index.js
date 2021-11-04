const express = require('express');
const busca = require('./busca.js');
const cadastro = require('./cadastro.js');
const perfil = require('./perfil.js');

module.exports = app => {

    app.use(busca)
    app.use(cadastro)
    app.use(perfil)

    app.get('/', (req, res) => res.send('Tela Inicial'))

}

