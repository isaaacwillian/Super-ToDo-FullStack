import User from "../models/User";
import { Request, Response } from "express";

interface props {}

const userController = {
    register: (req: Request, res: Response) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        user.save()
            .then(() => {
                res.send(user);
            })
            .catch((err: Error) => {
                res.status(400).send(err.message);
            });
    },
};

export default userController;
