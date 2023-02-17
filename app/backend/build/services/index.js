"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.CPFService = void 0;
const cpf_service_1 = __importDefault(require("./CPF/cpf.service"));
exports.CPFService = cpf_service_1.default;
const users_service_1 = __importDefault(require("./user/users.service"));
exports.UserService = users_service_1.default;
