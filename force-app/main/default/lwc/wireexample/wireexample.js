import { LightningElement, wire } from 'lwc';
import getAccountList from '@Salesforce/apex/AccountController1.getAccountList';
export default class Wireexample extends LightningElement {
    @wire(getAccountList)
    accounts
}