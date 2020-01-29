const nodemailer = require("nodemailer");

module.exports = userEmail => {
  const output = `<p> you are Registered on our website ... welcome </p>
     </p> `;
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    // secure: false,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD
    },
    // tls: {
    //   rejectUnauthorised: false
    // }
  });

  let mailOptions = {
    from: '"info" <info@mailtrap.io>', // sender address
    to: userEmail, // list of receivers
    subject: "Registration to our website", // Subject line
    text: "Thanks for registering", // plain text body
    html: output // html body
  };

  //   mailOptions.to = email;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(info.messageId);
    console.log(nodemailer.getTestMessageUrl(info));
    res.render("contact", {
      msg: "Email has been sent",
      layout: false
    });
  });
};
