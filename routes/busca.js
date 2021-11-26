const { Router } = require('express');
const UsersControl = require('../controllers/UsersControl.js');
const NivelControl = require('../controllers/NivelControl.js');
const UserSkillsControl = require('../controllers/UserSkillsControl.js');

const router = Router();

router.get('/public/busca/user', UsersControl.selectAllUsers)

router.get('/public/busca/user/:user', UsersControl.selectOneUsers)

router.get('/public/busca/skill', UserSkillsControl.selectAllUserSkills)

router.get('/public/busca/skill/:skill', UserSkillsControl.selectAllOneUserSkills)

router.get('/public/busca/nivel/:nivel', NivelControl.selectAllOneLevels)

module.exports = router