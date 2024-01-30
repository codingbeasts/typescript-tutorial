//declared payment objects and methods
import { hasFormatter } from "../interface/hasFormatter.js";
class payment implements hasFormatter {
  // client: string;// details:string;// amount:number;
  constructor(
    public recipent: string,
    public details: string,
    readonly amount: number
  ) {
    // this.client = c;// this.details = d;// this.amount = a;
  }
  format() {
    return `${this.recipent} has owed $${this.amount} for ${this.details}`;
  }
}
export default payment;
