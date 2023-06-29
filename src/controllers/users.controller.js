const { isEmail, isDate, isNumeric } = require("validator");
const moment = require("moment");
const User = require("../models/users.models");
const sendEmail = require('./mail.controller');

const addUserDetailsController = async (req, res) => {
  try {
    // Validate input fields
    const { name, email, dob, phone } = req.body;
    
    // return res.status(200).json(req.body);
    if (!name || !email || !dob || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!isNumeric(phone.toString())) {
      return res
        .status(400)
        .json({ error: "Phone must contain only numeric values" });
    }

    const dateOfBirth = new Date(dob);

    if (!isDate(dateOfBirth)) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const age = moment().diff(moment(dob), "years");

    if (age < 18) {
      return res
        .status(400)
        .json({ error: "Age must be greater than or equal to 18" });
    }

    // Check uniqueness for email and phone
    const existingUserEmail = await User.findOne({ where: { email } });
    if (existingUserEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const existingUserPhone = await User.findOne({ where: { phone } });
    if (existingUserPhone) {
      return res.status(400).json({ error: "Phone number already exists" });
    }

    // Create the user in the database
    const newUser = await User.create({
      name,
      email,
      dob,
      phone,
    });

    sendEmail(newUser);

    return res.json({ msg: "User created successfully", data: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    return res.status(500).json({ error: "Failed to add user" });
  }
};

const listUsersController = async (req, res) => {
  const userId = req.params.id;
  
  const users = await User.findOne({ where: { id: userId } });

  if (users) {
    return res
      .status(200)
      .json({ msg: "Users fetched successfully", data: users });
  } else {
    return res.status(500).json({ error: "User does not exist" });
  }
};

module.exports = {
  addUserDetailsController,
  listUsersController,
};
