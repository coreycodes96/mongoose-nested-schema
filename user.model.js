import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    names: {
      Fname: {
        type: String,
        required: [true, "Please add oyur first name"],
      },
      Lname: {
        type: String,
        required: [true, "Please add your first name"],
      },
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    contacts: {
      email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
      },
      phonenumber: {
        type: String,
        required: [true, "Please add a phone number"],
        unique: true,
      },
    },
    location: {
      zipcode: { type: Number },
      town: {
        type: String,
        required: [true, "Please add a town"],
      },
      street: { type: String },
      estate: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
