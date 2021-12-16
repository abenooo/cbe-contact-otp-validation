// import nodemailer from "nodemailer";
// export default async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: process.env.user,
//       pass: process.env.pass,
//     },
//   });

//   try {
//     const emailRes = await transport.sendMail({
//       form: email,
//       to: "abenezerkifle000@gmail.com",
//       subject: `Contact form submission from cbe-birr-gateway ${name}`,
//       html: `<p><strong>you have new contact form submission</strong></p>
//   <p><strong>Name:</strong>${name}</p><br/>
//   <p><strong>Email:</strong>${email}</p><br/>
//   <p><strong>Phone:</strong>${phone}</p><br/>
//   <p><strong>Message:</strong>${message}</p>`,
//     });
//     console.log('message sent', emailRes.messageId);
//   } catch (err) {
//     console.log(err)
//   }

//   res.status(200).json(req.body);
// };
import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 2525,
  //   // secure: true,
  //   auth: {
  //     user: process.env.user,
  //     pass: process.env.pass,
  //   },
  // });
  // const transport = nodemailer.createTransport({
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "c41fa12676af0b",
  //     pass: "0c3a4ffc56ec9b"
  //   }
  // });
  // const transporter  = nodemailer.createTransport({
  //   service: 'Gmail',
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "3e72031ab48b88",
  //     pass: "0fc21a807a3041"
  //   }
  // });
  var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  service: 'Gmail',
  port: 2525,
  auth: {
    user: process.env.user,
    pass: process.env.pass
  },
  // increse the connection timeout
  connectionTimeout : 5*60*1000
});

  try {
   const emailRes = await transport.sendMail({
      from: email,
      to: 'abenezerkifle000@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>

      `,
      // console.log('Message Sent');
    });

    // console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
