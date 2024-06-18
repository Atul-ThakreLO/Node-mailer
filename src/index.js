import nodemailer from "nodemailer";
// import htmlFile from "./models/fileStream.js";
import fs from 'fs'
import dotEnv from "dotenv";
dotEnv.config({ path: "./.env" });

let htmlFile= fs.readFileSync('../NodeMailer/public/index.html', 'utf-8', (err) => {
  console.log(err);
});
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PASS,
  },
});

const mailOptions = {
  from: {
    name: "Atul Thakre",
    address: process.env.USER_NAME,
  },
  to: ["mybgmigaming24@gmail.com"],
  subject: "Check mail",
  text: "Hello bgmi",
  html: htmlFile,
};

async function mailSned(transporter, mailOptions) {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email is sent!");
  } catch (e) {
    console.log(e);
  }
}

mailSned(transporter, mailOptions);
