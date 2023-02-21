"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: 'trending_repositories_db',
    host: process.env.DB_HOST || 'db',
    port: Number(process.env.DB_PORT) || 3002,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
module.exports = config;
