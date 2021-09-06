require("dotenv").config();

const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html }) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `Ubercore <${from}>`, // sender address
    to: to, // list of receivers
    sendAt: sendAt,
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
};
