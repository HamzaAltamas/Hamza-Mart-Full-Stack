const express = require("express");
const dbConnection = require("./config/dbConfig");
const app = express();
require("dotenv").config();
const routes = require("./routes");
console.log(process.env);
var cors = require("cors");

// database connection
dbConnection();
// middlewire
app.use(cors());
app.use(express.json());


// routes
app.use(routes);

app.listen(8000);
