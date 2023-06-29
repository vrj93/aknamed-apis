const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
    },
  },
});

User.sync()
  .then(() => {
    console.log("Table created successfully");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

module.exports = User;
