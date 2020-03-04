const Sequelize = require("sequelize");

// ================================= User Authentication Model --------------------

const userModel = require("../models/Users");

// -------------------------------- Cards Models ------------------------

const jadeModel = require("../models/jadeC");

const connection = new Sequelize("dibizDatabase", "sahil", "123456789", {
  host: "localhost",
  dialect: "postgres"
});

connection
  .authenticate()
  .then(() => console.log("Connected With Databse"))
  .catch(err => console.log(err));

connection
  .sync({
    force: false
  })
  .then(() => console.log("Table Created Successfully"))
  .catch(err => {
    throw err;
  });

const users = userModel(connection, Sequelize);
const jade = jadeModel(connection, Sequelize);

jade.belongsTo(users, { as: "userRef", foreignKey: "userId" });

module.exports = {
  users,
  jade
};
