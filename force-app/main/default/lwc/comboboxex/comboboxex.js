import { LightningElement } from 'lwc';

export default class Comboboxex extends LightningElement {
    value="India";
    get options(){
        return[
        {label:"India",value:"INR"},
        {label:"USA",value:"USD"},
        {label:"Austraila",value:"ASD"},
        
        ];
    }
    handleChange(event){
        this.value=event.detail.value;
        alert(this.value);
    }
}
