import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root123',
    database: process.env.DB_NAME || 'Restricted_CPF_API_db',
    host: process.env.MYSQL_HOST || 'db',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
};

export = config;
