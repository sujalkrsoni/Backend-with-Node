import { Router } from "express";
import asyncHandler from "../middleware/AsyncHandler.js";
import { registerUser , googleCallback, googleAuth } from "../controller/userController.js";

const router = Router();

router.post("/" , asyncHandler(registerUser) )
// router.post("/login", asyncHandler(loginUser))
router.post("/auth/google", asyncHandler(googleAuth))
router.post("/auth/google/callback", asyncHandler(googleCallback))

export default router;
    