"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_model_1 = __importDefault(require("../../database/models/cpf.model"));
class CPFService {
}
exports.default = CPFService;
_a = CPFService;
CPFService.addCPF = async (cpf) => {
    try {
        await cpf_model_1.default.create({ cpf });
    }
    catch (error) {
        console.log('service');
        return error.message;
    }
};
CPFService.findOneCPF = async (cpfNumber) => {
    try {
        const findCPF = await cpf_model_1.default.findOne({
            attributes: ['cpf', 'createdAt'],
            where: { cpf: cpfNumber },
        });
        return findCPF;
    }
    catch (error) {
        console.log('service');
        return error.message;
    }
};
CPFService.findAllCPF = async () => {
    try {
        const findAllCPF = await cpf_model_1.default.findAll({
            attributes: ['cpf', 'createdAt'],
        });
        return findAllCPF;
    }
    catch (error) {
        return error.message;
    }
};
CPFService.deleteCPF = async (cpf) => {
    try {
        const deleteCPF = await cpf_model_1.default.destroy({ where: { cpf } });
        return deleteCPF;
    }
    catch (error) {
        return error.message;
    }
};
