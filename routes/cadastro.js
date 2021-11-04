const { Router } = require('express');
const UsersControl = require('../controllers/UsersControl.js');

const router = Router();

router.get('/cadastro', (req, res) => res.send('Tela de Cadastro'))
router.post('/cadastro', UsersControl.createUsers)

module.exports = router