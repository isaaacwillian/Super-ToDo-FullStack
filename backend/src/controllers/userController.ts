import User from "../models/User";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

const userController = {
    register: (req: Request, res: Response) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        });

        user.save()
            .then(() => {
                res.send(user);
            })
            .catch((err: Error) => {
                res.status(400).send(err.message);
            });
    },

    login: async (req: Request, res: Response) => {
        const selectedUser = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (!selectedUser)
            return res.status(400).send("Email or password is incorrect");

        res.send("User Logged");
    },
};

export default userController;
