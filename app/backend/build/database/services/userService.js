"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.userCreate = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const userCreate = async (user) => {
    const create = await userModel_1.default.create(user);
    return create;
};
exports.userCreate = userCreate;
const getAll = async () => {
    const allUsers = await userModel_1.default.findAll();
    return allUsers;
};
exports.getAll = getAll;
