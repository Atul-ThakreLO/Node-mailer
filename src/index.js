import nodemailer from "nodemailer";
import dotEnv from "dotenv";
dotEnv.config({ path: "../.env" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PASS,
  },
});

const mailOptions = {
  from: {
    name:"Atul Thakre",
    address: process.env.USER_NAME
  },
  to: "mybgmigaming24@gmail.com",
  subject: "Check mail",
  text: "Hello bgmi",
  html: "<center><h1>Atul Thakre</h1><p>This is First mail</p></center>"
}

async function mailSned(transporter, mailOptions) {
  try {
    await transporter.sendMail(mailOptions);
  } catch (e) {
    console.log("Error " + e);
  }
}

mailSned(transporter, mailOptions);