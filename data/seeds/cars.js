/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Cars").truncate();
  await knex("Cars").insert([
    {
      Car_id: "rowValue1",
      Vin_Number: "rowValue2",
      Car_Make: "rowValue3",
      Car_Model: "rowValue3",
      Mileage: "rowValue3",
      Title: "rowValue3",
      ransmission_Type: "rowValue3",
    },
    {
      Car_id: "rowValue1",
      Vin_Number: "rowValue2",
      Car_Make: "rowValue3",
      Car_Model: "rowValue3",
      Mileage: "rowValue3",
      Title: "rowValue3",
      ransmission_Type: "rowValue3",
    },
  ]);
};
