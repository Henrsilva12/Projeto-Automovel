// src/entity/Carro.js
const { EntitySchema } = require('typeorm');
const Status = require('./Status');
const Loja = require('./Loja');

const CarroSchema = new EntitySchema({
  name: 'Carro',
  tableName: 'carro',
  columns: {
    carro_id: {
      type: 'int',
      primary: true,
      generated: true
    },
    status_id: {
      type: 'int'
    },
    loja_id: {
      type: 'int'
    },
    placa: {
      type: 'varchar'
    },
    modelo: {
      type: 'varchar'
    },
    url_foto: {
      type: 'varchar'
    },
    preco_aluguel_dia: {
      type: 'decimal'
    },
    ano: {
      type: 'int'
    },
    marca: {
      type: 'varchar'
    }
  },
  relations: {
    status: {
      target: 'Status',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'carros'
    },
    loja: {
      target: 'Loja',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'carros'
    }
  }
});

module.exports = CarroSchema;
