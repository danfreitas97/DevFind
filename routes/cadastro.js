const { Router } = require('express');
const UsersControl = require('../controllers/UsersControl.js');
const UserSkillsControl = require('../controllers/UserSkillsControl.js');

const router = Router();

router.get('/cadastro', (req, res) => res.send('Tela de Cadastro'))

router.post('/cadastro', UsersControl.createUsers)

router.post('/cadastro/skills', UserSkillsControl.addUserSkills)



module.exports = router