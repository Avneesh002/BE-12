const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();
const { jobRouter } = require("./Router/job.Router");

app.use("/job", jobRouter);

app.listen(process.env.PORT, () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to db & Server at PORT ->", process.env.PORT);
  } catch (error) {
    console.log("err ->", error);
  }
});
