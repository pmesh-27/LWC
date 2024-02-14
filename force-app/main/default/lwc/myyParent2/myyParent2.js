import { LightningElement } from 'lwc';

export default class MyyParent2 extends LightningElement {
    no1=0;no2=0;
    noHandler(event)
    {
        this.no1=event.target.value;
    }
    ntHandler(event)
    {
        this.no2=event.target.value;
    }

}