import { LightningElement ,api} from 'lwc';

export default class childtask1 extends LightningElement {
 @api count = 0;
 incrementCount() {
 this.count += 1;
 }
}
