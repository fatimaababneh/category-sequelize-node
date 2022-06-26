const { sequelize } = require("../../models/index");
const { Op } = require("sequelize");

const getAllCat = async (req, res) => {
  try {
    const allCat = await sequelize.models.Categories.findAll({});
    res.status(200).json(allCat);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const addCat = async (req, res) => {
  console.log("add");
  try {
    const { name, image, description } = req.body;
    const newCat = await sequelize.models.Categories.create({
      name,
      image,
      description
    });
    res.status(201).json(newCat);
  } catch (error) {
    res.send(error.message);
  }
};

const getCat = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const newCat = await sequelize.models.Categories.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    );
    const one = await sequelize.models.Categories.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json(one);
  } catch (error) {}
};

const addimg = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;
    const newCat = await sequelize.models.Categories.update(
      {
        image: image,
      },
      {
        where: {
          id: id,
        },
      }
    );
    const one = await sequelize.models.Categories.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json(one);
  } catch (error) {}
};
const deleteitem = async (req, res) => {
  try {
    const { id } = req.params;
    const newCat = await sequelize.models.Categories.destroy(
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json(newCat);
  } catch (error) {console.log("not deleted")}
};

module.exports = {
  getAllCat,
  addCat,
  getCat,
  addimg,
  deleteitem
};
