import { LightningElement,wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';


export default class Publishcolor extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    colorList=[
        {label:'Red', value:'red'},
        {label:'Green', value:'green'},
        {label:'Blue', value:'Blue'},
        {label:'Yellow', value:'Yellow'},

    ];
    selectedColor='';
    colorHandler(event)
    {
        this.selectedColor=event.target.value;
    }
    publishHandler(event)
    {
        this.selectedColor='background-color:'+this.selectedColor;
        fireEvent(this.pageRef,'showColorEvt',this.selectedColor);
    }
}