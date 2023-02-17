"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../database/models/user.model"));
class UserService {
}
exports.default = UserService;
_a = UserService;
UserService.findByName = async (name) => {
    const findOne = await user_model_1.default.findOne({
        where: { name },
    });
    return findOne;
};
UserService.addNewUser = async ({ name, password, role, }) => {
    const findOne = await user_model_1.default.create({
        name,
        password,
        role,
    });
    return findOne;
};
