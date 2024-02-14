import { LightningElement, api,wire } from 'lwc';
import getAcc from '@salesforce/apex/AccountController.getAccountList';
 
export default class Achild extends LightningElement {
    actList = [];
    accountName = '';
    acctId = '';
 
    @wire(getAcc,{actName : '$accountName'})
    processAccounts({data,error})
    {
        if(data)
        {
            for(let i=0;i<data.length;i++)
            {
                this.actList = [...this.actList,{
                    label:data[i].Name,value:data[i].Id}];
            }
        }
        else if(error)
        {
            alert('Error : '+error)
        }
    }
 
    selectHandler(event)
    {
 
        this.acctId = event.target.value;
        const custEvt = new CustomEvent('myevent',{detail:this.acctId,bubbles: true});
        this.dispatchEvent(custEvt);
        alert(this.acctId);
    }
 
 
}
