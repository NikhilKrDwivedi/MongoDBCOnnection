const mongoose = require('mongoose');
//connection from database 
const dbURI ="mongodb://localhost:27017/acads-db-2019-20";
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true ,
};
const db=mongoose.connect(dbURI, options).then(
  () => {

    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

module.exports = db;