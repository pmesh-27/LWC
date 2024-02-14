import { LightningElement,api } from 'lwc';
import actObj from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import actName from '@salesforce/schema/Account.Name';
import actIndustry from '@salesforce/schema/Account.Industry';
import actRating from '@salesforce/schema/Account.Rating';
export default class DataServiceAllObject extends LightningElement {
 
    @api recordId;
    objName=actObj;
    fields=[actName,actRating,actIndustry];
 
    successHandler(event){
        // alert('Success');
        console.log(event.detail.id);
        const toastEvt = new ShowToastEvent({
            title: 'Success',
            message: 'Record edited successfully...',
            variant:'success',
           
        })
        this.dispatchEvent(toastEvt);
    }
   
 
}
