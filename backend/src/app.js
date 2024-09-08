const express = require('express');
const clienteRoutes = require('./routes/clienteRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yml'));


app.use(express.json());
app.use('/api', clienteRoutes);
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});