"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.visitorCreate = void 0;
const user_model_1 = __importDefault(require("../database/models/user.model"));
const visitorCreate = async (visitor) => {
    const create = await user_model_1.default.create(visitor);
    return create;
};
exports.visitorCreate = visitorCreate;
const getAll = async () => {
    const visitors = await user_model_1.default.findAll();
    return visitors;
};
exports.getAll = getAll;
