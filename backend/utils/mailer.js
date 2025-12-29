import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.HOST_EMAIL,
    pass: process.env.HOST_PASSKEY,
  },
});

export const Sendmail = async (name, email, mobile, subject, message) => {
  const mail1 = {
    from: `${name} <${process.env.HOST_EMAIL}>`,
    to: process.env.HOST_EMAIL,
    replyTo: email,
    subject: `${subject}-Enquiry from ${name}`,
    text: `${message}\n\nContact Number: ${mobile}\nEmail ID: ${email}`,
  };

  const mail2 = {
    from: process.env.HOST_EMAIL,
    to: email,
    subject: `${name} - query sent to MBA faculty, IEM, Kolkata`,
    text: `Thank you ${name} for contacting with the MBA faculty of Institute of Engineering and Management, Kolkata.\n Our faculty will soon contact you back to clarify your query regarding ${subject}.\n\nThank You\nMBA Faculty`,
  };

  try {
    const info1 = await transporter.sendMail(mail1);
    console.log("Mail 1 sent successfully.....");
    const info2 = await transporter.sendMail(mail2);
    console.log("Mail 2 sent successfully.....");
    return info1
  } catch (error) {
    console.log("Error sending mails: ", error);
  }
};

export const replymail = async (to,subject, name, reply, messageId) => {
  const mail = {
    from: process.env.HOST_EMAIL,
    to: to,
    subject: `Re: ${subject}`,
    inReplyTo: messageId,
    references: messageId,
    text: `Dear ${name},\n\n${reply}\n\nThank You\nMBA Faculty`,
  };
  try {
    const info = await transporter.sendMail(mail);
    console.log("Reply mail sent successfully.....");
  } catch (error) {
    console.log("Error sending reply mail: ", error);
  }
};
