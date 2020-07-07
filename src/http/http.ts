import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { Observable } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';
import clc from 'https://deno.land/x/color/index.ts';
import Kia from "https://deno.land/x/kia@0.3.0/mod.ts";
import {Router} from './router.ts';

class Http {
  spinner: any;
  http: Application;

  constructor() {
    this.http = new Application();
  }

  default() {
    this.http.use(async (context) => {
      await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/public`,
      });
    })
  }

  async fire({ host, port, root}: any) {
    const spinner = new Kia('');
    spinner.start();
    this.listener().subscribe({
      next: async (text: string) => {
        await spinner.set({text})
      }
    })
    this.http = await Router.load(this.http, root);
    this.default();
    this.http.listen({port})
  }

  listener(): Observable<any> {
    return new Observable(subscriber => {
      this.http.addEventListener("listen", ({ hostname, port, secure }) => {
        subscriber.next(
          clc.green.text(`Listening on: ${secure ? "https://" : "http://"}${hostname ?? "localhost"
          }:${port}`)
        );
        subscriber.complete()
      });
    });
  }
} 

export * from './router.ts';
export default new Http();