"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_check_1 = require("cpf-check");
const services_1 = require("../services");
class CPFValidate {
}
exports.default = CPFValidate;
_a = CPFValidate;
CPFValidate.CPFBodyFormatValidate = async (req, res, next) => {
    try {
        const { cpf } = req.body;
        const CPFFormatCheck = (0, cpf_check_1.validate)(cpf);
        if (!CPFFormatCheck) {
            return res.status(400).json({ message: 'InvalidCpfException' });
        }
        return next();
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
};
CPFValidate.CPFParamsFormatValidate = async (req, res, next) => {
    try {
        const { cpf } = req.params;
        const CPFFormatCheck = (0, cpf_check_1.validate)(cpf);
        if (!CPFFormatCheck) {
            return res.status(400).json({ message: 'InvalidCpfException' });
        }
        return next();
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
};
CPFValidate.checkIfCPFExist = async (req, res, next) => {
    try {
        const params = req.params;
        const CPFresult = await services_1.CPFService.findOneCPF(params.cpf);
        if (CPFresult === null)
            return res
                .status(404)
                .json({ message: 'NotFoundCpfException' });
        return next();
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
};
CPFValidate.checkIfCPFAlreadyExist = async (req, res, next) => {
    const { cpf } = req.body;
    const CPFcheck = await services_1.CPFService.findOneCPF(cpf);
    if (CPFcheck) {
        return res.status(409).json({ message: 'ExistsCpfException' });
    }
    return next();
};
