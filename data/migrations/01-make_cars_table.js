exports.up = function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('', () => {
    table.increments('')
  })
};

exports.down = function  (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('')
};
