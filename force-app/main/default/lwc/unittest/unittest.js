import { LightningElement } from 'lwc';



export default class Unittest extends LightningElement {
  unitNumber;
  handleChange(event) {
    this.unitNumber = event.target.value;
  }

}