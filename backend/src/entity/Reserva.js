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
      type: 'date'
    },
    custo: {
      type: 'decimal'
    },
    impostos: {
      type: 'decimal'
    },
    retirada: {
      type: 'date'
    }
  },
  relations: {
    carro: {
      target: 'Carro',
      type: 'many-to-one',
      joinColumn: { name: 'carro_id' },
      inverseSide: 'reservas'
    },
    cliente: {
      target: 'Cliente',
      type: 'many-to-one',
      joinColumn: { name: 'cliente_id' },
      inverseSide: 'reservas'
    },
  }
});

module.exports = ReservaSchema;
