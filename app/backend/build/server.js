"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const refreshTrendingRepoListOnDbPerHour_1 = __importDefault(require("./services/repository/utils/refreshTrendingRepoListOnDbPerHour"));
require("dotenv/config");
(0, refreshTrendingRepoListOnDbPerHour_1.default)();
const PORT = process.env.APP_PORT || 3001;
new app_1.App().start(PORT);
