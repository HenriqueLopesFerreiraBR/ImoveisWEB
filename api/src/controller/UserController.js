// controllers/UsuarioController.js
const Usuario = require('../model/User');

class UsuarioController {
  // Método para obter todos os usuários
  static async getAllUsuarios(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  // Método para criar um novo usuário
  static async createUsuario(req, res) {
    const { nome, email, senha, isAdmin } = req.body;

    try {
      const novoUsuario = await Usuario.create({ nome, email, senha, isAdmin });
      res.status(201).json(novoUsuario);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  // Método para obter um usuário por ID
  static async getUsuarioById(req, res) {
    const usuarioId = req.params.id;

    try {
      const usuario = await Usuario.findByPk(usuarioId);

      if (!usuario) {
        res.status(404).send('Usuário não encontrado');
        return;
      }

      res.json(usuario);
    } catch (error) {
      console.error('Erro ao obter usuário por ID:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  // Método para atualizar um usuário por ID
  static async updateUsuario(req, res) {
    const usuarioId = req.params.id;
    const { nome, email, senha, isAdmin } = req.body;

    try {
      const usuario = await Usuario.findByPk(usuarioId);

      if (!usuario) {
        res.status(404).send('Usuário não encontrado');
        return;
      }

      await usuario.update({ nome, email, senha, isAdmin });
      res.json(usuario);
    } catch (error) {
      console.error('Erro ao atualizar usuário por ID:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  // Método para excluir um usuário por ID
  static async deleteUsuario(req, res) {
    const usuarioId = req.params.id;

    try {
      const usuario = await Usuario.findByPk(usuarioId);

      if (!usuario) {
        res.status(404).send('Usuário não encontrado');
        return;
      }

      await usuario.destroy();
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao excluir usuário por ID:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}

module.exports = UsuarioController;
