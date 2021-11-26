const { Router } = require('express');
const UsersControl = require('../controllers/UsersControl.js');
const UserSkillsControl = require('../controllers/UserSkillsControl.js');
const auth = require('../auth')

const router = Router();

router.use(auth)

router.get('/perfil/:user', UsersControl.selectOneUsers)
router.patch('/perfil/:user', UsersControl.updateUsers)
router.delete('/perfil/:user', UsersControl.deleteUsers)

router.patch('/perfil/skills/:user', UserSkillsControl.updateUserSkills)
router.delete('/perfil/skills/:user', UserSkillsControl.deleteUserSkills)

module.exports = router