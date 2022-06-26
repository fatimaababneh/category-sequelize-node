const express = require("express");
const categoryRoute = express.Router();

const { getAllCat, addCat, getCat, addimg, deleteitem } = require("../controllers/category");

categoryRoute.get("/", getAllCat);
categoryRoute.post("/", addCat);
categoryRoute.put("/name/:id",getCat);
categoryRoute.put("/addimg/:id",addimg)
categoryRoute.delete("/delete/:id",deleteitem)  

module.exports = categoryRoute;
