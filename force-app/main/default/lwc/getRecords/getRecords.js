import { LightningElement,wire,api } from 'lwc';
import {getRecord, getFieldValue ,getFieldDisplayValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecords extends LightningElement {
    name
    owner
    annualRevenue 
    @api recordId
    @wire(getRecord, {recordId:'$recordId',fields:[NAME_FIELD,OWNER_FIELD,ANNUAL_REVENUE_FIELD]})
    accountHandler({data}){
        if(data){
            this.name=getFieldValue(data, NAME_FIELD)
            this.owner=getFieldValue(data, OWNER_FIELD)
            this.annualRevenue=getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD)
        }
    }
}