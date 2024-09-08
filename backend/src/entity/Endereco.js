// src/entity/Endereco.js
const { EntitySchema, JoinColumn } = require('typeorm');
const Cliente = require('./Cliente');

const EnderecoSchema = new EntitySchema({
  name: 'Endereco',
  tableName: 'endereco',
  columns: {
    endereco_id: {
      type: 'int',
      primary: true,
      generated: true
    },
    cep: {
      type: 'varchar'
    },
    estado: {
      type: 'varchar'
    },
    cidade: {
      type: 'varchar'
    },
    logradouro: {
      type: 'varchar'
    },
    numero: {
      type: 'varchar'
    },
    bairro: {
      type: 'varchar'
    },
    complemento: {
      type: 'varchar'
    }
  },
  relations: {
    cliente: {
      target: 'Cliente',
      type: 'one-to-one',
      joinColumn: { name: 'cliente_id' }, // Relaciona com cliente_id
      inverseSide: 'endereco'
    }
  }
});

module.exports = EnderecoSchema;
