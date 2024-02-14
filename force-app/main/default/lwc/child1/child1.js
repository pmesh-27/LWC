import { LightningElement ,api} from 'lwc';

export default class Child1 extends LightningElement {
    msg='Hi, LWC development is fun...';
    @api  changeCase()//public method can be invoked by the parent 
    {
        this.msg=this.msg.toUpperCase();
    }
}