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
      type: 'many-to-one',
      joinColumn: { name: 'cliente_id' },
      inverseSide: 'logins'
    }
  }
});

module.exports = LoginSchema;
