import enquirymodel from "../models/Enquiry.js";
import dotenv from "dotenv";
dotenv.config();
import xlsx from "xlsx";

export const downloadenquiries = async (req, res) => {
  try {
    const enquiries = await enquirymodel.find(
      {},
      {
        name: 1,
        email: 1,
        mobile: 1,
        subject: 1,
        message: 1,
        date: 1,
        _id: 0,
      }
    ).lean(); //converts mongodb docuements to plain js objects
    if (enquiries.length === 0) {
      return res.json({
        success: false,
        message: "No enquiries to download",
      });
    }

    //removes the risk of defined data values 
    const cleanData = enquiries.map(e => ({
      Name: e.name || "",
      Email: e.email || "",
      Mobile: e.mobile || "",
      Subject: e.subject || "",
      Message: e.message || "",
      Date: e.date ? new Date(e.date).toLocaleString() : "",
    }));


    const worksheet = xlsx.utils.json_to_sheet(cleanData); //Each object becomes a row, each key becomes a column.
    
    const workbook = xlsx.utils.book_new(); //entire workbook
    xlsx.utils.book_append_sheet(workbook, worksheet, "Enquiries"); //append worksheet to workbook with the name "Enquiries"
    const buffer = xlsx.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    }); //Converts Excel file into binary buffer so browser can download it.
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=mbaenquiries.xlsx"
    ); //download prompt with filename
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ); //identiffies type as excel
    res.send(buffer); //download as excel
  } catch (err) {
    return res.json({
      success: false,
      message: "Error downloading enquiries",
      error: err.message,
    });
  }
};
