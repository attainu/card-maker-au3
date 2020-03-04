const mailSender = require("../middlewares/emailSender");

const authSignup = async (req, res, next) => {
  req.app.locals.otp = Math.floor(Math.random() * 10000);
  // console.log(req.body.email);
  const data = await mailSender(
    req.body.email,
    "OTP From Dibiz",
    `Your One Time Password is ${req.app.locals.otp}`
  );
  next();
};

module.exports = authSignup;
