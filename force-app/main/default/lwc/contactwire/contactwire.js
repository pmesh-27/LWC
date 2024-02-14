import { LightningElement,wire } from 'lwc';
import con from '@salesforce/apex/ContactController.getContact';

export default class Contactwire extends LightningElement {
    @wire(con)
    contact;
}