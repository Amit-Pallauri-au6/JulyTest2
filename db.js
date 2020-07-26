const { Sequelize } = require("sequelize");

const connectDB = new Sequelize(
  "postgres://vzszcrzd:aXOYuf-xfVpUgU4qrwLOUF2X4_CxsJt0@rosie.db.elephantsql.com:5432/vzszcrzd",
  {
    host: "rosie.db.elephantsql.com",
    dialect: "postgres",
    logging: false
  }
);

connectDB.sync()

connectDB
  .authenticate()
  .then(() => {
    console.log(
      "Postgres database has been connected sucessfully");
  })
  .catch((err) => {
    console.error(
      "Connection failed Database not connected  error:",err);
  });
module.exports = connectDB;