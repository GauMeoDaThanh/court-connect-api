import { resolve } from "node:path";
import { config as loadEnv } from "dotenv";

const env = process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : "";
const envPath = resolve(process.cwd(), `.env${env}`);

loadEnv({ path: envPath, override: true, quiet: true });

const _env = process.env;

export const config = {
  port: _env.PORT || 6969,
  mongoUri: _env.MONGO_URI,
};
