const mailSender = require("../middlewares/formEmailSender");

const authSignup = async (req, res, next) => {
  const data = await mailSender(
    req.body.sender,
    req.body.email,
    req.body.subject,
    `${req.body.message} And there Contact no. is ${req.body.contact}`
  );
  next();
};

module.exports = authSignup;
