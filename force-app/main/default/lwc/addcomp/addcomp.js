import { LightningElement } from 'lwc';



export default class Addcomp extends LightningElement {
Number1=0;
Number2=0;
    res;
    first(event)
    {
        this.Number1=event.target.value;
    }
    second(event)
    {
        this.Number2=event.target.value;
    }
  
    addnumbers()
    {
        this.res = Number(this.Number1) + Number(this.Number2);
        
    }
}