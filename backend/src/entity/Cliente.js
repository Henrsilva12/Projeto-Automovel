// src/entity/Cliente.js
const { EntitySchema } = require('typeorm');
const Endereco = require('./Endereco');
const Login = require('./Login');

const ClienteSchema = new EntitySchema({
  name: 'Cliente',
  tableName: 'cliente',
  columns: {
    cliente_id: {
      type: 'int',
      primary: true,
      generated: true
    },
    endereco_id: {
      type: 'int'
    },
    nome: {
      type: 'varchar'
    },
    telefone: {
      type: 'varchar'
    },
    cnh: {
      type: 'varchar'
    },
    cpf: {
      type: 'varchar'
    },
    sexo: {
      type: 'varchar'
    },
    nascimento: {
      type: 'date'
    }
  },
  relations: {
    endereco: {
      target: 'Endereco',
      type: 'one-to-one',
      joinColumn: { name: 'endereco_id' },
      inverseSide: 'cliente'
    },
    login: {
      target: 'Login',
      type: 'one-to-one',
      joinColumn: { name: 'cliente_id' },
      inverseSide: 'cliente'
    },
    reservas: {
      target: 'Reserva',
      type: 'one-to-many',
      mappedBy: 'cliente'
    }
  }
});

module.exports = ClienteSchema;
