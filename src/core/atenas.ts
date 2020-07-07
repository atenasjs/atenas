import { AtenasConfig } from "../interfaces/atenasConfig.interface.ts";
import Http from '../http/http.ts';
import clc from 'https://deno.land/x/color/index.ts';

export class Atenas {
  root: string;
  http: any;

  constructor(config: AtenasConfig) {
    console.log(
      clc.green.text('[Atenas] Starting atenas project') +
      clc.white.text(String())
    );
    this.root = config.root;
    this.http = Http;
    this.http.fire(config);
  }

  listenerEvent(): void {
    
  }
}