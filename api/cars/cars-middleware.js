// const db = require("../../data/db-config");
const Cars = require("./cars-model");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  // const { id } = req.params.id;
  // const car = await db("Cars").where("Car_id", id).first();
  // if (!car) {
  //   next({ status: 404, message: `car with id ${id} is not found` });
  // } else {
  //   next();
  // }
  const { id } = req.params.id;
  try {
    const car = await Cars.getById(req.params.id);
    if (!car) {
      next({ status: 400, message: `car with id ${id} is not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = async (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.Vin_Number)
    return next({ status: 400, message: "vin is missing" });
  if (!req.body.Car_Make)
    return next({ status: 400, message: "make is missing" });
  if (!req.body.Car_Model)
    return next({ status: 400, message: "model is missing" });
  if (!req.body.Mileage)
    return next({ status: 400, message: "mileage is missing" });
  next();
};

const checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
  next();
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
