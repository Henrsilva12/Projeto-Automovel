// src/entity/Cliente.js
const { EntitySchema } = require('typeorm');
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
    logins: {
      target: 'Login',
      type: 'one-to-many',
      mappedBy: 'cliente'
    },
    enderecos: {
      target: 'Endereco',
      type: 'one-to-many',
      mappedBy: 'cliente'
    }
  }
});

module.exports = ClienteSchema;
