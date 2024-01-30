//declared invoice objects and methods
//public private,readonly
//modules
//interfaces with classes

import { hasFormatter } from "../interface/hasFormatter.js";
class invoice implements hasFormatter {
  // client: string;// details:string;// amount:number;
  constructor(
    public client: string,
    public details: string,
    readonly amount: number
  ) {
    // this.client = c;// this.details = d;// this.amount = a;
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
export default invoice;
