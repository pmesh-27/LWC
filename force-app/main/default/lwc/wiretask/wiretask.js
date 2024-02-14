import { LightningElement ,wire} from 'lwc';
import getAcct from '@salesforce/apex/AccountControllera.filterAccounts'
export default class Wiretask extends LightningElement {
    industry='';
    @wire(getAcct, {type:'$industry'})
    filteredAccounts
    
}