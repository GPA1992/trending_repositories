"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class CPFController {
}
exports.default = CPFController;
_a = CPFController;
CPFController.addCPFToRestrictedList = async (req, res) => {
    try {
        const { cpf } = req.body;
        await services_1.CPFService.addCPF(cpf);
        return res.status(201).json();
    }
    catch (error) {
        console.log('contoller');
        return res.status(500).json(error.message);
    }
};
CPFController.findOneCPFOnRestrictedList = async (req, res) => {
    try {
        const params = req.params;
        const CPFresult = await services_1.CPFService.findOneCPF(params.cpf);
        return res.status(200).json(CPFresult);
    }
    catch (error) {
        console.log('contoller');
        return res.status(500).json(error.message);
    }
};
CPFController.findAllCPFOnRestrictedList = async (req, res) => {
    try {
        const CPFresult = await services_1.CPFService.findAllCPF();
        return res.status(200).json(CPFresult);
    }
    catch (error) {
        console.log('contoller');
        return res.status(500).json(error.message);
    }
};
CPFController.deleteCPFOnRestrictedList = async (req, res) => {
    try {
        const params = req.params;
        await services_1.CPFService.deleteCPF(params.cpf);
        return res.status(204).json();
    }
    catch (error) {
        console.log('contoller');
        return res.status(500).json(error.message);
    }
};
