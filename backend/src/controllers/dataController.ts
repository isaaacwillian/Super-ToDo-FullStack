import { Request, Response } from "express";
import mongoose from "mongoose";

import User from "../models/User";

export const addTodo = async (req: Request, res: Response) => {
  const id = new mongoose.Types.ObjectId().toString();
  if (!req.body.todo) return res.status(404).json({ error: "Todo not found" });
  try {
    await User.updateOne(
      { _id: req.user._id },
      { $push: { todoList: { id, todo: req.body.todo } } }
    );
  } catch (error) {
    if (error instanceof Error) return res.status(500).json({ error: error.message });
  }
  return res.json({ ok: "Success" });
};

export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

export const removeTodo = async (req: Request, res: Response) => {
  try {
    const removedItem = await User.updateOne(
      { _id: req.user._id },
      { $pull: { todoList: { id: req.body.id } } }
    );
    if (removedItem.modifiedCount === 0) return res.status(404).json({ error: "Todo not found" });
  } catch (error) {
    return res.json(error);
  }

  return res.json({ ok: "Sucess" });
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const a = await User.updateOne(
      { _id: req.user._id, "todoList.id": req.body.todoId },
      { $set: { "todoList.$.todo": req.body.newTodo } }
    );
    if (a.modifiedCount === 0)
      return res.status(404).json({ error: "Todo not found or same todo" });
  } catch (error) {
    return res.json(error);
  }
  return res.json({ ok: "Success" });
};
