const mongoose = require("mongoose");

const uri =
  "mongodb+srv://fxrnands:6Tm9VCYXzbc8eExv@cluster.cz6bzfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

mongoose.connect(uri);
const dbConnection = mongoose.connection;
module.exports = dbConnection;
