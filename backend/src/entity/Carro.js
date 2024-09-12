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
      joinColumn: { name: 'status_id' },
      inverseSide: 'carros'
    },
    loja: {
      target: 'Loja',
      type: 'many-to-one',
      joinColumn: { name: 'loja_id' },
      inverseSide: 'carros'
    }
  }
});

module.exports = CarroSchema;
