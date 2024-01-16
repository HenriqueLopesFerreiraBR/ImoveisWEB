// routes/UsuarioRoutes.js
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/UserController');

// Rota para obter todos os usuários
router.get('/', UsuarioController.getAllUsuarios);

// Rota para criar um novo usuário
router.post('/', UsuarioController.createUsuario);

// Rota para obter um usuário por ID
router.get('/:id', UsuarioController.getUsuarioById);

// Rota para atualizar um usuário por ID
router.put('/:id', UsuarioController.updateUsuario);

// Rota para excluir um usuário por ID
router.delete('/:id', UsuarioController.deleteUsuario);

module.exports = router;
