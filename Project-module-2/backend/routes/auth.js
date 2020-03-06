const router = require("express").Router();
const { users } = require("../connection/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = require("../middlewares/signup");
const verify = require("../middlewares/auth");

router.post("/", auth, async (req, res) => {
  try {
    const Inserteddata = await users.create(req.body);
    res.json(Inserteddata);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/:id/verify", async (req, res) => {
  try {
    const otp = req.app.locals.otp;
    const userOtp = req.body.otp;
    console.log(otp, userOtp);
    if (otp === parseInt(userOtp)) {
      const updateUser = await users.update(
        { isVerified: true },
        { where: { id: req.params.id } }
      );
      res.json(updateUser);
    } else {
      res.status(400).send("Wrong Otp");
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

router.get("/posts", verify, async (req, res) => {
  res.json("Posts Are here");
});

router.post("/signin", async (req, res) => {
  try {
    let UserData = await users.findOne({
      where: { email: req.body.email, isVerified: true }
    });
    if (UserData) {
      const match = await bcrypt.compare(req.body.password, UserData.password);
      if (match) {
        const { id } = UserData;
        const jsonToken = await jwt.sign({ id: id }, process.env.JwtSecret, {
          expiresIn: 5000
        });
        res.json(jsonToken);
      } else {
        res.status(400).send("Invaild Credentials");
      }
    } else {
      res.status(400).send("No Users registred with this email Id");
    }
  } catch (error) {
    res.status(500).send(`Internal Server Error !! ${error}`);
  }
});

router.get("/user", verify, async (req, res) => {
  console.log(req.user.id);
  const UserData = await users.findOne({ where: { id: req.user.id } });
  res.json(UserData);
});

module.exports = router;
