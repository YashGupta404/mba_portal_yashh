import enquirymodel from "../models/Enquiry.js";
import dotenv from "dotenv";
dotenv.config();
import emailverification from "../utils/emailverification.js";
import Sendmail from "../utils/mailer.js";

export const postenquiry = async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body;
    const isemailverified = await emailverification(email);
    if (!isemailverified) {
      return res.json({
        success: false,
        message: "Unverified email",
      });
    }
    const newenquiry = await enquirymodel.create({
      name,
      email,
      mobile,
      subject,
      message,
    });
    Sendmail(name, email, mobile, subject, message);
    return res.json({
      success: true,
      message: "Successfully posted enquiry",
      enquirydetails: newenquiry,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Error Posting enquriy",
      error: err.message,
    });
  }
};

export const getenquiry = async (req, res) => {
  try {
    const displayenquiries = await enquirymodel.find();
    return res.json({
      success: true,
      message: "Fetched all enquiries",
      count: displayenquiries.length,
      enquiry: displayenquiries,
    });
  } catch (err) {
    return res.json({
      success: true,
      message: "Error fetching enquiries..",
      error: err.message,
    });
  }
};
export const getenquiryspecificbysubject = async (req, res) => {
  try {
    const { subject } = req.params;
    const x = await enquirymodel.findOne({ subject });
    if (!x) {
      return res.json({
        success: false,
        message: "No enquirires are there related to " + subject,
      });
    }
    const getsubjectbasedenquiry = await enquirymodel.find({ subject });
    return res.json({
      success: true,
      message: "List of enquiries based on " + subject,
      displaysubjectbasedenquiry: getsubjectbasedenquiry,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Filtering failed based on subject",
      error: err.message,
    });
  }
};

export const deleteenquirybysubject = async (req, res) => {
  try {
    const { subject } = req.params;
    const x = await enquirymodel.findOne({ subject });
    if (!x)
      return res.json({
        success: false,
        message: "Nothing left to be deleted",
      });
    await enquirymodel.deleteMany({ subject });
    return res.json({
      success: true,
      message: "Deleted all queries releted to " + subject,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Issues deleting all data",
      error: err,
    });
  }
};

export const deleteenquiryspecific = async (req, res) => {
  try {
    const { id } = req.params;
    const find = await enquirymodel.findOne({ _id: id });
    if (!find) {
      return res.json({
        success: false,
        message: "Already absent from Database",
      });
    }
    const deletespecific = await enquirymodel.deleteOne({ _id: id });
    return res.json({
      sucess: true,
      message: "Sucessfully deleted this one ",
      id,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Issue releted to delete this specific one",
    });
  }
};

export const searchspecific = async (req, res) => {
  try {
    let { search } = req.query;

    if (!search || search.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    search = search.trim();

    const query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        {
          $expr: {
            $regexMatch: {
              input: { $toString: "$mobile" },
              regex: search,
              options: "i",
            },
          },
        },
      ],
    };

    const findenquiry = await enquirymodel.find(query);

    return res.status(200).json({
      success: true,
      message: findenquiry.length
        ? "Matching enquiries retrieved"
        : "No matching enquiries",
      count: findenquiry.length,
      display: findenquiry,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error searching enquiries",
      error: err.message,
    });
  }
};

export const updatestatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedEnquiry = await enquirymodel.findByIdAndUpdate(
      id,
      { status },
      { new: true } // returns updated document
    );

    if (!updatedEnquiry) {
      return res.json({
        success: false,
        message: "Enquiry not found",
      });
    }

    return res.json({
      success: true,
      message: "Status updated successfully",
      enquiry: updatedEnquiry,
    });
    
  } catch (err) {
    return res.json({
      success: false,
      message: "Error updating status",
      error: err.message,
    });
  }
};
