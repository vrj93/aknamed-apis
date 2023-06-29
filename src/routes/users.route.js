const express = require("express");
const route = express.Router();
const {
  addUserDetailsController,
  listUsersController,
} = require("../controllers/users.controller");

route.post("/create-user", addUserDetailsController);
route.get("/list-user/:id", listUsersController);

module.exports = route;
