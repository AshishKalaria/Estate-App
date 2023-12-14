import { Router } from "express";
const router = Router();
import test, { updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);

export default router;
