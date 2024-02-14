import { LightningElement,api } from 'lwc';
import actName from '@salesforce/schema/Account.Name';
import actIndustry from '@salesforce/schema/Account.Industry';
import actRating from '@salesforce/schema/Account.Rating';

export default class Ldsex1 extends LightningElement {
    @api recordId;
    fields=[actName,actRating,actIndustry];
}