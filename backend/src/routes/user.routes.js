import { Router } from "express";
import { getUser, loginUser, registerUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/getData", getUser)

export default router;