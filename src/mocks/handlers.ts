import { rest } from "msw";

export const handlers = [
  rest.post("/login", (_req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");
    const randomAccessToken = (Math.random() * Math.random()).toString();

    return res(
      ctx.set("Access-Control-Allow-Credentials", "true"),
      ctx.set("Access-Control-Allow-Origin", "http://localhost:5173"),
      ctx.cookie("accessToken", randomAccessToken, {
        path: "/",
        maxAge: 1000 * 60 * 30,
        sameSite: "lax",
      }),
      ctx.status(200)
    );
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

    return res(
      ctx.cookie("accessToken", "", {
        path: "/",
        maxAge: 0,
        sameSite: "lax",
      }),
      ctx.status(200)
    );
  }),
];
