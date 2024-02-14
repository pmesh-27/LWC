import { LightningElement } from 'lwc';

export default class Calcqselector extends LightningElement {
    no1=0;
    no2=0;
    res;
    res1;
    greet(event)
    {
        this.no1=this.template.querySelector('.fno').value;
        this.no2=this.template.querySelector('.sno').value;
        this.res = Number(this.no1) + Number(this.no2);
        this.res1= Number(this.no1) * Number(this.no2);
    }
}