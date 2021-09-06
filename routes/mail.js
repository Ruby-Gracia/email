const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/sendemail", async (req, res) => {
  const {
    emailTo,
    emailFrom,
    firstname,
    lastname,
    email,
    phonenumber,
    message,
  } = req.body;
  if (!emailTo || !emailFrom) {
    return res.status(422).send({ error: "All fields are required." });
  }
  // send mail
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  var mailOptions = {
    from: emailFrom,
    to: emailTo,
    sendAt: "1630909920",
    subject: "New Contact Request",
    text: `${emailFrom}Add a Text.`,
    html: `
    <p>You have received a new Contact Request from the enquiries form on the Ubercore website.</p>
    <h3>Contact Details:</h3>
   
      <b>First Name: </b> ${firstname} <br>
      <b>Last Name: </b> ${lastname} <br>
      <b>Email: </b> ${email} <br>
      <b>Phone Number: </b> ${phonenumber} <br>
      <b>Message: </b> ${message} <br>
  `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:" + info.response);
      return res.status(200).json({ message: "email sent." });
    }
  });
});

module.exports = router;
