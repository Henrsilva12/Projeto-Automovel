// src/entity/Loja.js
const { EntitySchema } = require('typeorm');
const Carro = require('./Carro');

const LojaSchema = new EntitySchema({
  name: 'Loja',
  tableName: 'loja',
  columns: {
    loja_id: {
      type: 'int',
      primary: true,
      generated: true
    },
    nome: {
      type: 'varchar'
    },
    cep: {
      type: 'varchar'
    }
  },
  relations: {
    carros: {
      target: 'Carro',
      type: 'one-to-many',
      mappedBy: 'loja'
    }
  }
});

module.exports = LojaSchema;
