import { LightningElement } from 'lwc';


export default class QSelector extends LightningElement {
    msg='default message...';
    greet(event)
    {
        this.msg=this.template.querySelector('.myClass').value;
    }
}