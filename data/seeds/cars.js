/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Cars").truncate();
  await knex("Cars").insert([
    { Car_id: "rowValue1" },
    { Vin_Number: "rowValue2" },
    { Car_Make: "rowValue3" },
    { Car_Model: "rowValue3" },
    { Mileage: "rowValue3" },
    { Title: "rowValue3" },
    { Transmission_Type: "rowValue3" },
  ]);
};

table.increments("Car_id");
table.string("Vin_Number").notNullable().unique();
table.string("Car_Make").notNullable();
table.string("Car_Model").notNullable();
table.integer("Mileage").notNullable();
table.string("Title");
table.string("Transmission");
