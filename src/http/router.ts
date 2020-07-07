import { Router as OakRouter } from "./oak.ts";
import { Application, send } from "https://deno.land/x/oak/mod.ts";

class HttpRouter extends OakRouter {
  async load(application: Application, config: any) {
    // const api = await import("file:\\\\" + config + "\\routes\\api.ts");
    const web = await import("file:\\\\" + config + "\\routes\\web.ts");
    // application.use(api.default.routes());
    application.use(web.default.routes());
    return application
  }
}

export const Router = new HttpRouter()