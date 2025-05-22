// src/server.js
const express = require('express');
const morgan = require('morgan');
const usuarioRoutes = require('./routes/usuarioRoutes');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
