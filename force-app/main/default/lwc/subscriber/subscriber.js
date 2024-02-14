import { LightningElement,wire } from 'lwc';
import pubsub from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';


export default class Subscriber extends LightningElement {
    msg;
    from;
    @wire(CurrentPageReference)
    pageRef;
    connectedCallback()
    {
        //register this component as a subscriber
        pubsub.registerListener('pubevent',this.pubEventHandler,this);
    }
    disconnectedCallback()
    {
        pubsub.unregisterAllListener(this);
    }
    pubEventHandler(msg)
    {
        this.msg=msg.msg;
        this.from=msg.from;
        }
}