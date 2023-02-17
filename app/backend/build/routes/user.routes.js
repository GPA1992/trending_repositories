"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_validate_1 = __importDefault(require("../middleware/user.validate"));
const auth_1 = __importDefault(require("../auth/auth"));
const router = express_1.default.Router();
router.post('/', auth_1.default.tokenHandle, user_validate_1.default.createUserfieldHandle, user_controller_1.default.addNewUser);
exports.default = router;
