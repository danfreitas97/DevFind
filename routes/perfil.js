const { Router } = require('express');
const UsersControl = require('../controllers/UsersControl.js');

const router = Router();

router.get('/perfil/:user', UsersControl.selectOneUsers)
router.put('/perfil/:user', UsersControl.updateUsers)
router.delete('/perfil/:user', UsersControl.deleteUsers)

module.exports = router