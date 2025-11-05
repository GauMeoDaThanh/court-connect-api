import Elysia from "elysia";

export const user = new Elysia({ prefix: "/user" }).get(
  "/",
  () => "User Module",
  {
    detail: {
      tags: ["User"],
    },
  }
);
