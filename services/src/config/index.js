import dotenv from 'dotenv';
import path from 'path';
import { normalizePort } from '@utils/port';


dotenv.config();

const PORT = normalizePort(process.env.PORT || '3000');
const { ADMIN_UI_PATH = path.join(__dirname, '../assets/admin') } = process.env;

export {
  PORT,
  ADMIN_UI_PATH,
};
