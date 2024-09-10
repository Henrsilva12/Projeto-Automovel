// src/data-source.js
const { DataSource } = require('typeorm');
const Status = require('../entity/Status');
const Login = require('../entity/Login');
const Loja = require('../entity/Loja');
const Carro = require('../entity/Carro');
const Cliente = require('../entity/Cliente');
const Endereco = require('../entity/Endereco');
const Reserva = require('../entity/Reserva');

const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgresql://sistemadereserva_owner:RCn9BZtj1yNi@ep-tiny-sunset-a5699hho.us-east-2.aws.neon.tech/sistemadereserva?sslmode=require',
  //dropSchema: false, // Use `true` only in development
  synchronize: true, // Use `true` only in development

  logging: false,
  entities: [Status, Login, Loja, Carro, Cliente, Endereco, Reserva],
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });

module.exports = AppDataSource;
