module.exports = (connection, Sequelize) => {
  return connection.define("Jade", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Email Id is Not Valid"
        }
      }
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 20],
          msg: "Title should only contains 1 to 20 Charactres "
        }
      }
    },
    contact: {
      type: Sequelize.REAL(10),
      allowNull: false,
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
    address: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    isNavigate: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    isWhatsup: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    isContactForm: {
      type: Sequelize.STRING,
      defaultValue: false
    },
    facebookLink: {
      type: Sequelize.STRING,
      defaultValue: null
      // validate: {
      //   isUrl: {
      //     args: true,
      //     msg: "Not a Correct Url"
      //   }
      // }
    },
    linkedin: {
      type: Sequelize.STRING,
      defaultValue: null
      // validate: {
      //   isUrl: {
      //     args: true,
      //     msg: "Not a Correct Url"
      //   }
      // }
    },
    youtube: {
      type: Sequelize.STRING,
      defaultValue: null
      // validate: {
      //   isUrl: true,
      //   msg: "Not A Correct Url"
      // }
    },
    instagram: {
      type: Sequelize.STRING,
      defaultValue: null
      // validate: {
      //   isUrl: true,
      //   msg: "Not A Correct Url"
      // }
    },
    website: {
      type: Sequelize.STRING,
      allowNull: true
      // validate: {
      //   isUrl: true,
      //   msg: "Not A Valid Website"
      // }
    },
    isPublic: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    views: {
      type: Sequelize.REAL,
      defaultValue: 0
    },
    profileImage: {
      type: Sequelize.TEXT("large"),
      allowNull: true
    },
    coverImage: {
      type: Sequelize.TEXT("large"),
      allowNull: true
    },
    // ownerId: {
    //   type: Sequelize.UUID,
    //   allowNull: false
    // },
    location: {
      type: Sequelize.STRING,
      allowNull: true
    },
    isLocationShared: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: true
    }
  });
};
