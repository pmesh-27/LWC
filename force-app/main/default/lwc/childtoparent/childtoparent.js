import { LightningElement,track } from 'lwc';

export default class Childtoparent extends LightningElement {
    inp;
    clickHandler(event){
        this.inp=this.template.querySelector('.data').value;
        const stu={
            roll:100,
            name:'Mohit',
            msg:this.inp
        }
        const custEvt=new CustomEvent('myevent',{detail:stu,bubbles:true});
        this.dispatchEvent(custEvt);
    }
}