import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },

    address: {
      country: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      fullAddress: { type: String, required: true },
    },

    education: {
      bachelors: { type: String, required: true },
      masters: { type: String, default: null },
      other: {
        type: { type: String, default: null },
        detail: { type: String, default: null },
      },
    },

    mbaProgram: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", ApplicationSchema);
