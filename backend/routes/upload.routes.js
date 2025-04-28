const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configuração de armazenamento local
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Pasta uploads/
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Rota de upload
router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Nenhum arquivo enviado' });
  }

  res.status(201).json({
    message: 'Upload realizado com sucesso',
    file: req.file.filename
  });
});

module.exports = router;
