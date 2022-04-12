import express from "express";
import { addTodo, getAllTodo, removeTodo, updateTodo } from "../controllers/dataController";
import { validateToken } from "../controllers/authController";

const router = express.Router();

router.post("/add", validateToken, addTodo);
router.get("/get", validateToken, getAllTodo);
router.delete("/remove", validateToken, removeTodo);
router.put("/update", validateToken, updateTodo);

export default router;
