const { Router } = require('express');
const SkillsControl = require('../controllers/SkillsControl.js');

const router = Router();

router.get('/admskill/', SkillsControl.selectAllSkills);

router.get('/admskill/:skill', SkillsControl.selectOneSkills);

router.post('/admskill/', SkillsControl.addSkills);

router.patch('/admskill/:skill', SkillsControl.updateSkills);

router.delete('/admskill/:skill', SkillsControl.deleteSkills);





module.exports = router