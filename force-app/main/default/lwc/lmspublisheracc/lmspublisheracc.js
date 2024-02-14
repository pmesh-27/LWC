import { LightningElement,wire } from 'lwc';
import myChannel from '@salesforce/messageChannel/myCh__c'
import {MessageContext, publish} from 'lightning/messageService';
import getAccount from '@salesforce/apex/lmsacc.getAccount'
export default class LMSPublisher extends LightningElement {
  lmsMsg;
 
  @wire(MessageContext)
  msgContext;
   
    @wire(getAccount)
    acct;
  publishHandler(event){
 
    this.lmsMsg = this.template.querySelector('lightning-input').value;
    alert(JSON.stringify(this.acct));
    alert(JSON.stringify(this.acct.data.Name));
        const message = {
           
            Name: this.acct.data.Name,
            Phone: this.acct.data.Phone,
            Industry: this.acct.data.Industry,
 
            from: 'LWC'
        }
        publish(this.msgContext,myChannel,message);
 
  }
 
  clearHandler(event){
    this.lmsMsg = this.template.querySelector('lightning-input').value;
 
        const message = {
            message:'',
            from: ''
        }
        publish(this.msgContext,myChannel,message);
 
  }
 
}
