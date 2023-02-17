import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 5000;

new App().start(PORT);
