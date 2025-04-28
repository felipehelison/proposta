const express = require('express');
const router = express.Router();
const db = require('../services/db');

// Cadastrar proposta
router.post('/', async (req, res) => {
  const { client_id, description } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO proposals (client_id, description) VALUES (?, ?)',
      [client_id, description]
    );
    res.status(201).json({ id: result.insertId, message: 'Proposta criada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar proposta' });
  }
});

// Listar propostas
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT p.*, c.name AS client_name 
       FROM proposals p 
       JOIN clients c ON p.client_id = c.id`
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar propostas' });
  }
});

module.exports = router;
