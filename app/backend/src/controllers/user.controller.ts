import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../services';

export default class Login {
    public static addNewUser = async (req: Request, res: Response) => {
        try {
            const { body } = req;

            const salt = bcrypt.genSaltSync(10);

            const hash = bcrypt.hashSync(body.password, salt);

            const newUser = {
                name: body.name,
                role: body.role,
                password: hash,
            };

            await UserService.addNewUser(newUser);

            return res
                .status(201)
                .json({ message: `User ${body.name} successfully created` });
        } catch (err: any) {
            return res.status(500).json({
                message: 500,
                error: err.message,
            });
        }
    };
}
