const { Router } = require('express');
const LoginControl = require('../controllers/LoginControl')

const router = Router();

router.post('/login', LoginControl.login)

module.exports = router