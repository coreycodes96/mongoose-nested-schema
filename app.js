import express from "express";
import mongoose from "mongoose";
import { userData } from "./data.js";
import User from "./user.model.js";

const app = express();

app.get("/", async (req, res) => {
  const user = await User.create(userData);

  console.log(user.names.Fname);
  console.log(user.names.Lname);
  console.log(user.contacts.email);

  return res.json(JSON.stringify(user));
});

app.listen(5000, () => {
  mongoose.connect("mongodb://localhost:27017/test");
  console.log(`you are now connected`);
});
