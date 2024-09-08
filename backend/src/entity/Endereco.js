// src/entity/Endereco.js
const { EntitySchema } = require('typeorm');
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
    },
    cliente_id: {
      type: 'int'
    }
  },
  relations: {
    cliente: {
      target: 'Cliente',
      type: 'many-to-one',
      joinColumn: { name: 'cliente_id' },
      inverseSide: 'enderecos'
    }
  }
});

module.exports = EnderecoSchema;
