import { LightningElement ,api} from 'lwc';
import actObj from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 
 
export default class Lds2 extends LightningElement {
    objName=actObj;
    @api recordId
    successHandler(event)
    {
        alert('success...');
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
    resetHandler(event){
        const
        inputFields=this.template.querySelectorAll('lightning-input-field');
        if(inputFields)
        {
            Array.from(inputFields).forEach(field=>{
                field.reset()
            })
        }

    }
 
 
}