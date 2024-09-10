// src/entity/Status.js
const { EntitySchema } = require('typeorm');

const StatusSchema = new EntitySchema({
  name: 'Status',
  tableName: 'status',
  columns: {
    status_id: {
      type: 'int',
      primary: true,
      generated: true
    },
    valor: {
      type: 'varchar'
    }
  }
});

module.exports = StatusSchema;
