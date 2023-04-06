const express = require("express");
const dbConnection = require("./config/dbConfig");
const app = express();
require("dotenv").config();
const routes = require("./routes");
console.log(process.env);

// middlewire
app.use(express.json())


// database connection
dbConnection();

// routes
app.use(routes);

app.listen(8000);
