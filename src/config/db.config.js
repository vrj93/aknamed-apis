require("dotenv").config();
const Sequelize = require("sequelize");

const localhost = process.env.DB_HOST || "localhost";
const dbName = process.env.DB_NAME;
const userName = process.env.DB_USER;
const password = process.env.DB_PASS;
const dialect = process.env.DB_DIALECT;

// Create a Sequelize instance with your MySQL database credentials
const sequelize = new Sequelize(dbName, userName, password, {
  host: localhost,
  dialect: dialect,
});

module.exports = sequelize;
