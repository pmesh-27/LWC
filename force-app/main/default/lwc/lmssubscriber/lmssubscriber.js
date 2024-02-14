import { LightningElement,wire } from 'lwc';
import myChannel from '@salesforce/messageChannel/myCh__c';
import { MessageContext,subscribe,unsubscribe } from 'lightning/messageService';
export default class Lmssubscriber extends LightningElement {
    @wire(MessageContext) msgContext;
    msg='';
    from;
    subscription;
    connectedCallback(){
        this.subscription=subscribe(
            this.msgContext,myChannel,(message)=>{
                this.subscribeMyChannel(message);
            });
        
    }
    disconnectedCallback()
    {
        unsubscribe(this.subscription);

    }
    subscribeMyChannel(message)
    {
        this.msg=message.message;
        this.from=message.from;
    }

}