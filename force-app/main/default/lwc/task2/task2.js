import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Lwctask3 extends NavigationMixin(LightningElement) {
 @api accountId = '';
 @api errorMessage = '';
 changeHandler(event) {
 this.accountId = event.target.value;
 }
 navToAccount() {
 if (this.accountId) {
 this[NavigationMixin.Navigate]({
 type: 'standard__recordPage',
 attributes: {
 recordId: this.accountId,
 actionName: 'view',
 },
 })
 } else {
 this.errorMessage = 'Please enter an Account Record ID.';
 }
 }
}