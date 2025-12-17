import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    name: {
      first: { type: String, required: true },
      middle: { type: String },
      last: { type: String, required: true },
    },

    email: { type: String, required: true },

    phone: {
      code: { type: String, required: true },
      number: { type: String, required: true },
    },

    address: {
      country: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      fullAddress: { type: String, required: true },
    },

    education: {
      bachelors: { type: String, required: true },
      masters: { type: String },
    },

    mbaProgram: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Application", ApplicationSchema);
