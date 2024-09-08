const express = require('express');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();

app.use(express.json());
app.use('/api', clienteRoutes);

// Inicializa as models com a instância do Sequelize

const AppDataSource = require('./config/data-source');

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });
