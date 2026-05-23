import express from "express";
import Course from "../models/Course.js";
import Session from "../models/Session.js";
import crypto from "crypto";

const router = express.Router();

// GET all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    // console.log("req headers:", req.headers);
    // console.log("req.cookies:", req.cookies);
    const sessionId = req.signedCookies?.sessionId; // make sure to use signedCookies to access the signed cookie, because in bottom we've set the cookie as signed: true

    // console.log("Session ID:", sessionId);

    if (!sessionId) {
      const hex = crypto.randomBytes(16).toString("hex");
      // console.log(hex);
      const session = await Session.create({
        _id: hex,
      });

      // console.log("New session created:", session);

      res.cookie("sessionId", session._id.toString(), {
        httpOnly: true,
        maxAge: 1000 * 60 * 1, // 1 minute
        signed: true,
        sameSite: "lax",
      });
    }

    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
