import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
  path: path.join(process.cwd(), '.env'),
});
// dotenv.config();

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const DB_LOCAL_URL = process.env.DB_LOCAL_URL;
export const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD;
