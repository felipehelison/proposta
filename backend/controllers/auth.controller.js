const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../services/db');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

  if (!rows.length) return res.status(404).json({ message: 'Usuário não encontrado' });

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: 'Senha inválida' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '8h' });

  res.json({ token, firstAccess: user.first_access });
};

exports.changePassword = async (req, res) => {
  const { userId, newPassword } = req.body;
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await db.query('UPDATE users SET password = ?, first_access = 0 WHERE id = ?', [hashedPassword, userId]);

  res.json({ message: 'Senha alterada com sucesso' });
};
