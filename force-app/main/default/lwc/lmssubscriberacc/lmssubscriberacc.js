import { LightningElement,wire } from 'lwc';
import myChannel from '@salesforce/messageChannel/myCh__c';
import { MessageContext, subscribe,unsubscribe } from 'lightning/messageService';
export default class LMSSubscriber extends LightningElement {
 
    @wire(MessageContext) msgContext;
   
    Name;
    Phone;
    Industry;
    from;
    subscription;
    connectedCallback()
    {
        this.subscription=subscribe(
            this.msgContext,myChannel,(message)=>{
                this.subscribeMyChannel(message);
            }
        );
    }
 
    disconnectedCallback(){
        unsubscribe(this.subscription);
    }
    subscribeMyChannel(message){
        this.Name=message.Name;
        this.Phone=message.Phone;
        this.Industry=message.Industry;
        this.from=message.from;
    }
}