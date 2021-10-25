import { Request, Response } from "express-serve-static-core";
import { Express } from "express";
import { User } from "../entity/User";

const signup = (req: Request, res: Response) => {
    const user: User = new User();
    console.log(req.body);
    user.name = req.body.name;
    user.phone = req.body.phone || '';
    user.email = req.body.email;
    user.password = req.body.password;
    user.image = req.body.image || '';
    user.loginType = req.body.loginType;
    user.createAt = new Date();
    user.updateAt = new Date();

    try {
        user.save();
        res.status(200).send({message : 'Ok'});
    } catch (err) {
        throw new Error(err);
    }
}


