import { AtenasConfig } from "../interfaces/atenasConfig.interface.ts";
import Http from '../http/http.ts'
export class Atenas {
  root: string;
  http: any;

  constructor(config: AtenasConfig) {
    this.root = config.root;
    this.http = Http;
    console.log(config)
    this.http.fire(config)
  }
}