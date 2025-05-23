// src/server.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarioRoutes');
require('dotenv').config();

const app = express();

app.use(cors());

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Rotas
app.use('/usuarios', usuarioRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
