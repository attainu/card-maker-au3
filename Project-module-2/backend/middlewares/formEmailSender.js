const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

function maileSender(sender, email, subject, message) {
  let mailoptions = {
    from: sender,
    to: email,
    subject: subject,
    text: message
  };
  transporter.sendMail(mailoptions, function(err, suc) {
    if (err) throw err;
    else console.log(suc);
  });
}

module.exports = maileSender;
