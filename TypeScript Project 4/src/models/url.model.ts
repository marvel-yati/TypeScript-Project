import mongoose from "mongoose";
const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
    trim:true
    },
  shortUrl: {
    type: String,
    required:true,
    unique:true,
    trim:true
    },
  urlCode:{
    type: String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
  },
});
export const urlModel = mongoose.model("url", urlSchema);