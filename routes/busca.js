const { Router } = require('express');
const UsersControl = require('../controllers/UsersControl.js');
const SkillsControl = require('../controllers/SkillsControl.js');
const NivelControl = require('../controllers/NivelControl.js');

const router = Router();

router.get('/busca', (req, res) => res.send('Tela de Busca'))

router.get('/busca/user', UsersControl.selectAllUsers)

router.get('/busca/user/:user', UsersControl.selectOneUsers)

router.get('/busca/skill', SkillsControl.selectAllSkills)

router.get('/busca/skill/:skill', SkillsControl.selectAllOneSkills)

router.get('/busca/nivel/:nivel', NivelControl.selectAllOneLevels)

module.exports = router