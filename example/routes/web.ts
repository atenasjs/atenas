import { Router } from "../../mod.ts";
import { TestMiddleware } from "../app/middlewares/Test.middleware.ts";
import Hello from "../app/controllers/Hello.controller.tsx";

/**
 * Routing Web
 *
 * Example:
 *  Router.get('router', ({request, response}) => {});
 */

Router.use(TestMiddleware).get("/", Hello);

export default Router;
