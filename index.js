const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./routes/route");

const app = express();
const PORT = 8080;

mongoose.connect("mongodb://localhost:27017/foodassignment", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
