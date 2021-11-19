const { Router } = require('express');
const UsersControl = require('../controllers/UsersControl.js');
const NivelControl = require('../controllers/NivelControl.js');
const UserSkillsControl = require('../controllers/UserSkillsControl.js');

const router = Router();

router.get('/busca/user', UsersControl.selectAllUsers)

router.get('/busca/user/:user', UsersControl.selectOneUsers)

router.get('/busca/skill', UserSkillsControl.selectAllUserSkills)

router.get('/busca/skill/:skill', UserSkillsControl.selectAllOneUserSkills)

router.get('/busca/nivel/:nivel', NivelControl.selectAllOneLevels)

module.exports = router