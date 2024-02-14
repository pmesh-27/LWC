import { LightningElement } from 'lwc';
import msg from '@salesforce/label/c.FrenchGreet';
export default class CustomLabel extends LightningElement {
    greet=msg;
}