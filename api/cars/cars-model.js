const db = require("../../data/db-config");

const getAll = async () => {
  // DO YOUR MAGIC

  const result = await db("Cars");
  return result;
};

const getById = async (Car_id) => {
  // DO YOUR MAGIC

  const result = await db("Cars").where("Car_id", Car_id).first();
  return result;
};

const create = async (car) => {
  // DO YOUR MAGIC

  const [Car_id] = await db("Cars").insert(car);
  const result = await getById(Car_id);
  return result;
};

module.exports = {
  getAll,
  getById,
  create,
};
