import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
    username: process.env.MYSQLUSER|| 'root',
    password: process.env.MYSQLPASSWORD|| '123456',
    database: process.env.MYSQLDATABASE || 'trending_repositories_db',
    host: process.env.MYSQLHOST || 'db',
    port: Number(process.env.MYSQLPORT) || 3002,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};

module.exports = config;

