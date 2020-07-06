import { AtenasConfig } from "../interfaces/atenasConfig.interface.ts";

export class Atenas {
  root: string;

  constructor(config: AtenasConfig) {
    this.root = config.root;
    console.log('Atenas')
  }
}