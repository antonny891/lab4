const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);
