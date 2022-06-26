const { sequelize } = require("../../models/index");
const { Op } = require("sequelize");

const getAllCars = async (req, res) => {
  try {
    const allCars = await sequelize.models.Cars.findAll({});
    res.status(200).json(allCars);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const addCar = async (req, res) => {
  console.log("add");
  try {
    const { name, price, color, available } = req.body;
    const newCar = await sequelize.models.Cars.create({
      name,
      price,
      color,
      available,
    });
    res.status(201).json(newCar);
  } catch (error) {
    res.send(error.message);
  }
};

const getExpensiveCars = async (req, res) => {
  try {
    const { id } = req.params;
    // const price = req.params.price;
    const { name } = req.body;
    const newCar = await sequelize.models.Cars.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    );
    const one = await sequelize.models.Cars.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json(one);
  } catch (error) {}
};

module.exports = {
  getAllCars,
  addCar,
  getExpensiveCars,
};
