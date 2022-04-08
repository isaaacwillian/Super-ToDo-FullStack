import express from "express";
import { add, get } from "../controllers/dataController";
import { validateToken } from "../controllers/authController";

const router = express.Router();

router.post("/add", validateToken, add);
router.post("/get", validateToken, get);

export default router;
