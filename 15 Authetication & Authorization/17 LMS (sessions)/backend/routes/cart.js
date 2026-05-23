import express from "express";

const router = express.Router();

// GET cart
router.get("/", async (req, res) => {
  //Add your code here
});


// Add to cart
router.post("/", async (req, res) => {
  const { courseId, quantity } = req.body;
  const sessionId = req.signedCookies.sessionId;
  const cart = await Cart.findOneAndUpdate({ sessionId }, { $push: { courses: { courseId, quantity } } , guestId : sessionId}, { new: true, upsert: true });
  console.log(cart)
  res.status(200).json({message : "Course added to cart", cart});
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
