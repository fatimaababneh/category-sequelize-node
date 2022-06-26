const express = require("express");
const carRoute = express.Router();

const { getAllCars, addCar,getExpensiveCars } = require("../controllers/car");

carRoute.get("/", getAllCars);
carRoute.post("/", addCar);
carRoute.put("/cars/:id",getExpensiveCars)


module.exports = carRoute;
