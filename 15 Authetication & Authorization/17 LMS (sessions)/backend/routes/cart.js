import express from "express";
import Cart from "../models/Cart.js";
import Session from "../models/Session.js";

const router = express.Router();

// GET cart
router.get("/", async (req, res) => {
  //Add your code here
});


// Add to cart
router.post("/", async (req, res) => {
  try {
    // 1. Extract courseId and quantity from the request body. Default quantity to 1 if not provided.
    const { courseId } = req.body;
    const quantity = parseInt(req.body.quantity, 10) || 1;

    // 2. Get the guest ID from the signed cookies (session ID)
    const guestId = req.signedCookies.sessionId;

    // 3. Validate input
    if (!guestId) {
      return res.status(400).json({ message: "Session ID is missing." });
    }
    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required." });
    }

    // 4. Find the session (Optional: depends on if you need to validate the session exists)
    const session = await Session.findById(guestId);
    if (!session) {
      return res.status(404).json({ message: "Session not found." });
    }

    //5/ Try to add the course into cart ONLY if the course
    // does not already exist inside the courses array
    const pushResult = await Cart.updateOne(
      // Find cart of current guest
      // AND make sure courseId is NOT already present
      {
        guestId: guestId,
        "courses.courseId": { $ne: courseId },
      },

      // If course is not present,
      // push new course object into courses array
      {
        $push: {
          courses: { courseId, quantity },
        },
      },

      // If cart does not exist,
      // MongoDB will create a new cart automatically
      { upsert: true },
    );

    //6. If modifiedCount === 0
    // it means Step 1 did NOT push anything
    // which means course already exists in cart
    if (pushResult.modifiedCount === 0) {
      // Find cart + matched course
      await Cart.updateOne(
        {
          guestId: guestId,

          // Find the course that already exists
          "courses.courseId": courseId,
        },

        {
          // Increase quantity of matched course
          // courses.$ refers to matched array element
          $inc: {
            "courses.$.quantity": quantity,
          },
        },
      );
    }

    // 7. Return success response
    res.status(200).json({
      message: "Course added to cart successfully",
      session,
    });
  } catch (error) {
    // 8. Handle any potential server errors (e.g., invalid ObjectId format, database disconnections)
    console.error("Error adding to cart:", error);
    res.status(500).json({
      message: "An error occurred while adding to cart",
      error: error.message,
    });
  }
});

// Remove course from cart
router.delete("/:courseId", async (req, res) => {
  //Add your code here
});

// Clear cart
router.delete("/", async (req, res) => {
  //Add your code here
});

export default router;
