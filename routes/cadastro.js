const { Router } = require('express');
const UsersControl = require('../controllers/UsersControl.js');
const UserSkillsControl = require('../controllers/UserSkillsControl.js');

const router = Router();

router.post('/cadastro', UsersControl.createUsers)

router.post('/cadastro/skills', UserSkillsControl.addUserSkills)



module.exports = router