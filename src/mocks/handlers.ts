import { rest } from "msw";

export const handlers = [
  rest.post("/login", (_req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");
    return res(ctx.status(200));
  }),
  rest.get("/user", (_req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
  rest.post("/logout", (_req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "false");
    return res(ctx.status(200));
  }),
];
