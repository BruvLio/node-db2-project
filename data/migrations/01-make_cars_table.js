exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable("Cars", (table) => {
    table.increments("Car_id");
    table.string("Vin_Number").notNullable().unique();
    table.string("Car_Make").notNullable();
    table.string("Car_Model").notNullable();
    table.integer("Mileage").notNullable();
    table.string("Title");
    table.string("Transmission");
  });
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists("Cars");
};
