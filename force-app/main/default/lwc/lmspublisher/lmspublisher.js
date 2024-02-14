import { LightningElement,wire} from 'lwc';
import myChannel from '@salesforce/messageChannel/myCh__c';
import { MessageContext,publish } from 'lightning/messageService';


export default class Lmspublisher extends LightningElement {
    lmsMsg;
    @wire(MessageContext)
    msgContext;
    publishHandler(event)
    {
        this.lmsMsg=this.template.querySelector('lightning-input').value;
        const message={
            message:this.lmsMsg,
            from:'LWC'
        }
        publish(this.msgContext,myChannel,message);
    }
}