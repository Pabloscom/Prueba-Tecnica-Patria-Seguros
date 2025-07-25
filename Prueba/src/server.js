const express = require('express');
const path = require('path');
const db = require('./db');
const productoRoutes = require('./routes/productoRoutes');

const app = express(); 

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/productos', productoRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
