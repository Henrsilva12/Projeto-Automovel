const express = require('express');
const cors = require('cors');
const path = require('path');
const YAML = require('yamljs');
const clienteRoutes = require('./routes/clienteRoutes'); // exemplo de importação
const reservaRoutes = require('./routes/reservaRoutes');
const carroRoutes = require('./routes/carroRoutes');
const lojaRoutes = require('./routes/lojaRoutes');
const statusRoutes = require('./routes/statusRoutes');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Configurar o CORS
const corsOptions = {
  origin: '*', // Permite todas as origens, pode ser ajustado para domínios específicos
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions)); // Aplicar o middleware CORS

// Outras configurações de middleware
app.use(express.json());

// Swagger setup (se necessário)
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yml'));

// Rotas
app.use('/api', clienteRoutes);
app.use('/api', reservaRoutes);
app.use('/api', carroRoutes);
app.use('/api', lojaRoutes);
app.use('/api', statusRoutes);
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
