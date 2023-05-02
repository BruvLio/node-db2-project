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

const getByVin = async (vin) => {
  return db("Cars").where("Vin_Number", vin).first();
};

const create = async (car) => {
  // DO YOUR MAGIC

  const [Car_id] = await db("Cars").insert(car);
  const result = await getById(Car_id);
  return result;

  // return db("Cars")
  //   .insert(car)
  //   .then(([id]) => {
  //     return getById(id);
  //   });
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};
