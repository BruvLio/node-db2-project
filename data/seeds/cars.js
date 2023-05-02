/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Cars").truncate();
  await knex("Cars").insert([
    {
      Vin_Number: "1N6SD16S8NC343640",
      Car_Make: "BMW",
      Car_Model: "Series3",
      Mileage: "90000",
      Title: "owned",
      Transmission_Type: "Manual",
    },
    {
      Vin_Number: "4T1BE32K85U528911",
      Car_Make: "Mercedes",
      Car_Model: "Cla",
      Mileage: "340",
      Title: "leased",
      Transmission_Type: "automatic",
    },
  ]);
};
