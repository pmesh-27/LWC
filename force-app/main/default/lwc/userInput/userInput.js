import { LightningElement } from 'lwc';

export default class UserInput extends LightningElement {
     firstNumber=0;secondNumber=0;res=0;flag=false;

    handleNumberOeChange(event) {
        this.firstNumber = parseInt(event.target.value);
    }
    handleNumberTwoChange(event) {
        this.secondNumber = parseInt(event.target.value);
    }
    resultHandler(event) {
            this.res= parseInt(this.firstNumber) + parseInt(this.secondNumber);
            this.flag = true;
        }
}
