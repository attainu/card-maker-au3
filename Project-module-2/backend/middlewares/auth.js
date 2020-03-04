const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("No Token , Authorization denied");
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JwtSecret);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).send("Token is not Valid !");
    }
  }
};

module.exports = auth;
