// src/entity/Login.js
const { EntitySchema } = require('typeorm');
const Cliente = require('./Cliente');

const LoginSchema = new EntitySchema({
  name: 'Login',
  tableName: 'login',
  columns: {
    login_id: {
      type: 'int',
      primary: true,
      generated: true
    },
    cliente_id: {
      type: 'int'
    },
    email: {
      type: 'varchar'
    },
    senha: {
      type: 'varchar'
    }
  },
  relations: {
    cliente: {
      target: 'Cliente',
      type: 'one-to-one',
      joinColumn: { name: 'cliente_id' },
      inverseSide: 'login'
    }
  }
});

module.exports = LoginSchema;
