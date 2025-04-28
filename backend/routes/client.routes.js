const express = require('express');
const router = express.Router();
const db = require('../services/db');

// Cadastrar cliente
router.post('/', async (req, res) => {
  const { name, cpf_cnpj, phone, email, address } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO clients (name, cpf_cnpj, phone, email, address) VALUES (?, ?, ?, ?, ?)',
      [name, cpf_cnpj, phone, email, address]
    );
    res.status(201).json({ id: result.insertId, message: 'Cliente cadastrado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar cliente' });
  }
});

// Listar clientes
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM clients');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

module.exports = router;
