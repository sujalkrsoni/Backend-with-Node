import { Schema } from "mongoose";
import mongoose from "mongoose";

const sessionSchema = new Schema({
  _id : {
    type : String,
    trim : true,
  },
  cart: {
    type: Schema.Types.Mixed,
    default: {},
  },
  expiredAt: { type: Date, default: Date.now() + 1000 * 60 * 1 }, // 1 minute
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
