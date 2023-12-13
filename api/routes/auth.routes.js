import { Router } from "express";
const router = Router();
import { signup, signin } from "../controller/auth.controller.js";

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
