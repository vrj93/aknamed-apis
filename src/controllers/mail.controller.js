var nodemailer = require('nodemailer');

function sendEmail (user) {
    // define the transporter
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'vrj022@gmail.com',
        pass: 'ssggvjfwzewnefvx'
      }
    });
  
    // Define the email
    var mailOptions = {
      from: 'vrj022@gmail.com',
      to: `${user.email}`,
      subject: 'User Details',
      text: `Hi ${user.name}, \nYour details with \nEmail: ${user.email}\nPhone: ${user.phone}\nDate of Birth: ${user.dob}\ncreated successfully.`
    };
  
    // We send the email
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent');
      }
    });
  };

module.exports = sendEmail;
  