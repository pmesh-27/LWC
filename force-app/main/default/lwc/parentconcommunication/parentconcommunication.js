import { LightningElement,wire} from 'lwc';
import getcon from '@salesforce/apex/AccountController.getAccountList';
 
export default class Aparent extends LightningElement {
 
    accId ='';
   
    custEventHandler(event){  
        this.accId = event.detail;
        alert(this.accId);
    }
 
    @wire(getcon,{actId : '$accId'})
    conList
}