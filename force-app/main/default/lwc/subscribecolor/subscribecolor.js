import { LightningElement ,wire} from 'lwc';
import { registerListener } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class Subscribecolor extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    color;
    connectedCallback()
    {
        registerListener('showColorEvt',this.colorHandler,this);
    }
    colorHandler(color)
    {
        this.color=color;
        alert("Selected color : "+this.color);
    }
}