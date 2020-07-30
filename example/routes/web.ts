import { Router } from "../../mod.ts";
import { TestMiddleware } from "../app/middlewares/Test.middleware.ts";
import HelloController from "../app/controllers/Hello.controller.ts";

/**
 * Routing Web
 *
 * Example:
 *  Router.get('router', ({request, response}) => {});
 */

Router.use(TestMiddleware).get("/", HelloController.world);

export default Router;
