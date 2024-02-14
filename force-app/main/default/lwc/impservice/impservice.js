import { LightningElement } from 'lwc';
import getAct from '@salesforce/apex/AccountController.getAccountList';
export default class Impservice extends LightningElement {
actRecord;
        recId='0015g00001P8Fs6AAF';        
            clickHandler(event)
            {
                getAct({actID: this.recId})
                   .then(result=>{
                        this.actRecord=result;
                        alert(JSON.stringify(this.recId));
                   })
                   .catch(error=>{
                        console.log(JSON.stringify(error));
           
                   });
            }
        }