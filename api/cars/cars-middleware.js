// const db = require("../../data/db-config");
const Cars = require("./cars-model");
const vin = require("vin-validator");

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
      next({ status: 404, message: `car with id ${id} is not found` });
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
  if (!req.body.vin) return next({ status: 400, message: "vin is missing" });
  if (!req.body.make) return next({ status: 400, message: "make is missing" });
  if (!req.body.model)
    return next({ status: 400, message: "model is missing" });
  if (!req.body.mileage)
    return next({ status: 400, message: "mileage is missing" });
  next();
};

const checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
  if (vin.validate(req.body.vin)) {
    next();
  } else {
    next({
      status: 400,
      message: `vin ${req.body.vin} is invalid`,
    });
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const existing = await Cars.getByVin(req.body.vin);
    if (!existing) {
      next();
    } else {
      next({
        status: 400,
        message: `vin ${req.body.vin} already exists`,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
