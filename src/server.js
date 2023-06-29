const http = require("http");
const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

const sequelize = require("./config/db.config");

const server = http.createServer(app);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Unable to connect to the database
  });

// Handle server startup errors
server.on("error", (error) => {
  console.error("Server startup error:", error);
  process.exit(1); // startup error
});
