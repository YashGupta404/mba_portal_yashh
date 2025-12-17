import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();



const SendMail = async (name, email, mobile,subject,message) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.HOST_EMAIL,
            pass: process.env.HOST_PASSKEY
        }
    })

    const mail1 = {
        from :process.env.HOST_EMAIL,
        to:process.env.HOST_EMAIL,
        replyTo:email,
        subject: `${subject}-Enquiry from ${name}`,
        text:`${message}\n\nContact Number: ${mobile}\nEmail ID: ${email}`
    }

    const mail2 = {
        from: process.env.HOST_EMAIL,
        to: email,
        subject: `${name} - query sent to MBA faculty, IEM, Kolkata`,
        text:`Thank you ${name} for contacting with the MBA faculty of Institute of Engineering and Management, Kolkata.\n Our faculty will soon contact you back to clarify your query regarding ${subject}.\n\nThank You\nMBA Faculty`
    }

   try{
     const info1=await transporter.sendMail(mail1);
     console.log("Mail 1 sent successfully.....");
     const info2=await transporter.sendMail(mail2);
     console.log("Mail 2 sent successfully.....");
   }
   catch(error)
   {
     console.log("Error sending mails: ",error);
   }


}

export default SendMail;