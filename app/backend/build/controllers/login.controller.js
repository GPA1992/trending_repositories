"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const services_1 = require("../services");
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};
const secret = process.env.JWT_SECRET || 'jwt_secret';
class Login {
}
exports.default = Login;
_a = Login;
Login.login = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await services_1.UserService.findByName(name);
        const token = jwt.sign(Object.assign({}, user), secret, jwtConfig);
        if (user.role === 'admin') {
            return res.status(200).json({ token });
        }
        return res.status(200).json({ message: `User ${name} logged in` });
    }
    catch (err) {
        return res.status(500).json({
            message: 500,
            error: err.message,
        });
    }
};
