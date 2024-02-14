import { LightningElement,wire } from 'lwc';
import pubsub from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
export default class Publisher extends LightningElement {
    pubMsg;
    pubObj={};
    @wire(CurrentPageReference)
    pageRef;
    clickHandler(event)
    {
        this.pubMSG=this.template.querySelector('lightning-input').value;
         this.pubObj={
            msg:this.pubMSG,
            from: 'Publisher'
        }
        pubsub.fireEvent(this.pageRef,'pubevent',this.pubObj);

    }
}