// src/entity/Reserva.js
const { EntitySchema } = require('typeorm');
const Carro = require('./Carro');
const Cliente = require('./Cliente');
const Loja = require('./Loja');

const ReservaSchema = new EntitySchema({
  name: 'Reserva',
  tableName: 'reserva',
  columns: {
    reserva_id: {
      type: 'int',
      primary: true,
      generated: true
    },
    devolucao: {
      type: 'varchar'
    },
    custo: {
      type: 'decimal'
    },
    impostos: {
      type: 'decimal'
    },
    retirada: {
      type: 'varchar'
    }
  },
  relations: {
    carro: {
      target: 'Carro',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'reservas'
    },
    cliente: {
      target: 'Cliente',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'reservas'
    },
    loja: {
      target: 'Loja',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'reservas'
    }
  }
});

module.exports = ReservaSchema;
