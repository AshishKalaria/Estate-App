import { Router } from "express";
const router = Router();
import {
	signup,
	signin,
	google,
	signOut,
} from "../controller/auth.controller.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);
export default router;
