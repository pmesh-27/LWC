import { LightningElement } from 'lwc';

export default class Parent1 extends LightningElement {
    clickHandler(event)
    {
        this.template.querySelector('c-child1').changeCase();
        //childRef.changeCase();//calling child's public method
    }
    
}