import { LightningElement ,api} from 'lwc';
import actObj from '@salesforce/schema/Contact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class Ldsex2 extends LightningElement {
    objName=actObj;
    @api recordId
    successHandler(event)
    {
        console.log(event.detail.id);
        const toastEvt=new ShowToastEvent(
            {
                title: 'Success',
                message: 'Record Edited Successfully',
                variant: 'success',
            }
        );
        this.dispatchEvent(toastEvt);
    }

}