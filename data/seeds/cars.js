/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Cars").truncate();
  await knex("Cars").insert([
    {
      Vin_Number: "11111111111111111",
      Car_Make: "BMW",
      Car_Model: "Series3",
      Mileage: "90000",
      Title: "owned",
      Transmission_Type: "Manual",
    },
    {
      Vin_Number: "11111111111111112",
      Car_Make: "Mercedes",
      Car_Model: "Cla",
      Mileage: "340",
      Title: "leased",
      Transmission_Type: "automatic",
    },
  ]);
};
