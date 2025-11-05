import { Elysia } from "elysia";
import { auth } from "./modules/auth";
import { user } from "./modules/user";
import { allPlugins } from "./plugins";
import { config } from "./config/env";
import { connectDB } from "./config/db";
import openapi from "@elysiajs/openapi";

await connectDB();

const app = new Elysia()
  .use(openapi({path: "/docs", }))
  .use(allPlugins)
  .use(auth)
  .use(user)
  .listen(config.port);

console.log(`🚀 Elysia running at http://localhost:${config.port}`);
