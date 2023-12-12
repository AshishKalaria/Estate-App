import { Router } from "express";
const router = Router();
import test from "../controller/user.controller.js";

router.get("/test", test);
export default router;
