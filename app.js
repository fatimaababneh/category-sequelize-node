const express = require("express");
const app = express();
const cors = require("cors");
// require("./db/db");
const { sequelize } = require("./models/index");
sequelize.sync();
app.use(express.json());
app.use(cors());

const carRoute = require("./routers/routes/car");
const categoryRoute = require("./routers/routes/category");

app.use("/cars", carRoute);
app.use("/category", categoryRoute);

////////////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});
