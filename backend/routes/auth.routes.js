const express = require('express');
const router = express.Router();
const { login, changePassword } = require('../controllers/auth.controller');

// Rota para login
router.post('/login', login);

// Rota para troca de senha
router.post('/change-password', changePassword);

module.exports = router;
