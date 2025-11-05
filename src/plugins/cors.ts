import cors from "@elysiajs/cors";

export const corsPlugin = cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: false,
});
