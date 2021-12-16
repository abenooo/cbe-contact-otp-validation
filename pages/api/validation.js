// import nodemailer from "nodemailer";
// export default async (req, res) => {
//   const { phone, otp, date } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: "cbe.et.com",
//     port: 465,
//     secure: true,
//   });
// };

// try {
//   const phone = await transporter.sendPhone({
//     from: phone,
//   });
// } catch (err) {
//   // console.log(req.body);
//   res.status(200).json(req.body);
// }

// import nodemailer from 'nodemailer';
// export default async (req, res) => {
// //   if (req.method !== "POST") {
// //     res.status(405).send({ message: "Only POST requests allowed" });
// //     return;
// //   }
// //   console.log(req.body);
// //   res.status(200).json(req.body);
// if (response.status >= 400) {
//     return res.status(400).json({
//       error: "There was an error",
//     });
//   }

//   return res.status(200).json({ status: "ok" });
// }

// import nodemailer from 'nodemailer';
export default async (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
 };

