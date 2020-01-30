const nodemailer = require("nodemailer");

const sendEmail = async options => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS
    }
  });
  let mailOptions = {
    from: '"FBW3 Web Dev Course" <info@dci.pro>', // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
    html : `click <a href = ${options.resetUrl}>  here</a>  to reset your password`
  };
  await transporter.sendMail(mailOptions)
};

module.exports = sendEmail;


// module.exports = userEmail => {
//   const output = `<h1> YOU HAVE SUCCESSFULLY REGISTERED!.... WELCOME! </h1>`;
//   let transporter = nodemailer.createTransport({
//     host: "mail.hamburg-coders.pro",
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.MY_PASSWORD
//     },
//     tls: {
//       rejectUnauthorised: false
//     }
//   });

//   //   mailOptions.to = email;
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log(info.messageId);
//     console.log(nodemailer.getTestMessageUrl(info));
//     res.render("contact", {
//       msg: "Email has been sent",
//       layout: false
//     });
//   });
// };
