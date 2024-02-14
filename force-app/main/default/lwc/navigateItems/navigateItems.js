import { LightningElement } from 'lwc';
//step 1 is below
import {NavigationMixin} from 'lightning/navigation';
//step 2 is below
export default class NavigateItems extends NavigationMixin (LightningElement)
{
    pRef;
    actName;
    changeHandler(event)
    {
        this.actName=event.target.value;
    }
    /*navToAcctNewRec(event)
    {
        //step 3 creating pageref object
        this.pRef={
            type:'standard__objectPage',
            attributes:{
                objectApiName: 'Account',
                actionName:'new'
            },
            state:{
                defaultFieldValues:'Name=' + this.actName + ',Industry=Energy'
            }

        };
        */ 
       /*navToViewAcct()
       {
        this.pRef={
            type: 'standard__recordPage',
            attributes:{
                recordId:'0015h00001VHoyZAAT',
                objectApiName:'Account',
                actionName:'View'
            }
        };
        */ 
       /*navToEditAcct()
       {
        this.pRef={
            type: 'standard__recordPage',
            attributes:{
                recordId:'0015h00001VHoyZAAT',
                objectApiName:'Account',
                actionName:'edit'
        }
       };
       */ 
      navToWebSite()
      {
        this.pRef={
            type: 'standard__webPage',
            attributes:{
                url: 'https://www.relanto.ai/'
            }     
      };
       
        //step 4: dispatch the request
        this[NavigationMixin.Navigate](this.pRef);
    }

}