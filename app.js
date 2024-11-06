const express = require('express');
const app = express();
const PORT = 9000;

// Rutas
app.get('/', (req, res) => res.send('Bienvenido a la aplicación Node.js'));
app.get('/clientes', (req, res) => res.send('Ruta de clientes'));
app.get('/productos', (req, res) => res.send('Ruta de productos'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
