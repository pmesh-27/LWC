import { LightningElement } from 'lwc';
import multitempcomp from "./multitempcomp.html"
import multitempcomp2 from "./multitempcomp2.html"

export default class Multitempcomp extends LightningElement {
    showmultitempcomp=true;
    render(){
        return this.showmultitempcomp ? showmultitempcomp : showmultitempcomp2;
    }
    switchTemplate(){
        this.showmultitempcomp=!this.showmultitempcomp;
    }
}