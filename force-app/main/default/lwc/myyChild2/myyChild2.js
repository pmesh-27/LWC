import { LightningElement, api } from 'lwc';
export default class myyChild2 extends LightningElement {
@api n1=0;
@api n2=0;
result;
doAdd(event)
{
this.result = Number(this.n1) + Number(this.n2);
}
}