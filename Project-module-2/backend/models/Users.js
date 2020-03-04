const bcrypt = require("bcryptjs");
module.exports = (connection, Sequelize) => {
  return connection.define(
    "users",
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: Sequelize.UUIDV4
      },
      image: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 20],
            msg: "Firstname should only contains 1 to 20 Charactres "
          }
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 20],
            msg: "Lastname should only contains 1 to 20 Charactres "
          }
        }
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: "Email Id is Not Valid"
          }
        }
      },
      contact: {
        type: Sequelize.REAL(10),
        allowNull: false,
        unique: true,
        validate: {
          not: {
            args: ["[a-z]", "i"],
            msg: "Contact No. is Invalid !!"
          },
          len: {
            args: [10, 12],
            msg: "Invaild No."
          }
        }
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [8, 20],
            msg: "Minnimum Length of Password is 8"
          }
        }
      },
      isBlocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    },
    {
      hooks: {
        beforeCreate: function(user) {
          user.password = bcrypt.hashSync(user.password, 8);
        }
      }
    }
  );
};
