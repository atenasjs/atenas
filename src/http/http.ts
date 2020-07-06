import { Application, send } from "https://deno.land/x/oak/mod.ts";

class Http {
  http: Application;

  constructor() {
    this.http = new Application();
    this.default()
  }

  default() {
    this.http.use(async (context) => {
      await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/public`,
      });
    })
  }

  fire({ host, port}: any): void {
    this.http.listen({port})
  }

} 

export default new Http()