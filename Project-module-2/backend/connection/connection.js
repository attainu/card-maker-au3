const Sequelize = require("sequelize");

// ================================= User Authentication Model --------------------

const userModel = require("../models/Users");

// -------------------------------- Cards Models ------------------------

const jadeModel = require("../models/jadeC");

const connection = new Sequelize(
  "postgres://bhjtctut:hoaWbaD1q4DA1sHxARwDXuwm6Sm1Jxbj@drona.db.elephantsql.com:5432/bhjtctut",
  {
    logging: false
  }
);

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
