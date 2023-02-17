import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'jwt_secret';

class AuthMiddleware {
    public static tokenHandle(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.header('Authorization');

            if (!token) {
                return res.status(401).json({ message: 'Token not found' });
            }

            jwt.verify(token, secret as jwt.Secret, (err, user) => {
                if (err)
                    return res
                        .status(401)
                        .json({ message: 'Token must be a valid token' });
                req.body = { ...req.body, user };
                return next();
            });
        } catch (err) {
            return res
                .status(401)
                .json({ message: 'Expired or invalid token' });
        }
    }
}

export default AuthMiddleware;
