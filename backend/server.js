const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const clientRoutes = require('./routes/client.routes');
const proposalRoutes = require('./routes/proposal.routes');
const uploadRoutes = require('./routes/upload.routes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/proposals', proposalRoutes);
app.use('/api/uploads', uploadRoutes);

// Teste simples
app.get('/', (req, res) => {
  res.send('API online');
});

// Porta
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
