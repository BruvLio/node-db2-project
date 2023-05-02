const db = require("../../data/db-config");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params.id;
  const car = await db("Cars").where("Car_id", id).first();
  if (!car) {
    next({ status: 404, message: `car with id ${id} is not found` });
  } else {
    next();
  }
};

const checkCarPayload = async (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
