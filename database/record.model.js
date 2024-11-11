import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Record = new Schema(
  {
    _id: { type: String, required: true },
    data: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Record", Record);
