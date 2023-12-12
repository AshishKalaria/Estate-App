import { Router } from "express";
const router = Router();
import { signup } from "../controller/auth.controller.js";

router.post("/signup", signup);

export default router;
