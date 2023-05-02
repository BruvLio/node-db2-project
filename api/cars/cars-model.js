const db = require("../../data/db-config");

const getAll = async () => {
  // DO YOUR MAGIC

  const result = await db("cars");
  return result;
};

const getById = async (id) => {
  // DO YOUR MAGIC

  // const result = await db("cars").where("id", id).first();
  const result = await db("cars").where({ id }).first();
  return result;
};

const getByVin = async (vin) => {
  return db("cars").where("vin", vin).first();
};

const create = async (car) => {
  // DO YOUR MAGIC

  const [Car_id] = await db("cars").insert(car);
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
