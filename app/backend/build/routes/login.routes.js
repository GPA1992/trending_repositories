"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const user_validate_1 = __importDefault(require("../middleware/user.validate"));
const router = express_1.default.Router();
router.post('/', user_validate_1.default.loginFieldHandle, user_validate_1.default.fieldValidate, login_controller_1.default.login);
exports.default = router;
