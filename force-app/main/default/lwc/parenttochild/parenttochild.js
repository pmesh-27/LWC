import { LightningElement } from 'lwc';

export default class Parenttochild extends LightningElement {
    roll='';
    sName='';
    msgString;
    /*constructor(){
        super();
        this.template.addEventListener('myevent',this.custEventHandler.bind(this));

    }*/
    custEventHandler(event){
        const obj=event.detail;
        this.roll=obj.roll;
        this.sName=obj.name;
        this.msgString=obj.msg;
    }
}