/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      vin: "1N6SD16S8NC343640",
      make: "BMW",
      model: "Series3",
      mileage: "90000",
      title: "clean",
      transmission: "Manual",
    },
    {
      vin: "4T1BE32K85U528911",
      make: "Mercedes",
      model: "Cla",
      mileage: "340",
      title: "clean",
      transmission: "automatic",
    },
    {
      vin: "JH4DB7550SS005262",
      make: "Ford",
      model: "Focus",
      mileage: "10000",
      title: "salvage",
      transmission: "automatic",
    },
  ]);
};
