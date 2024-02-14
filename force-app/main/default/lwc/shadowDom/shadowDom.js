import { LightningElement } from 'lwc';
import all from '@salesforce/resourceUrl/res';
//import {loadStyle} from 'lightning/platformResourceLoader';
import {loadStyle} from 'lightning/platformResourceLoader';

 
export default class Staticres extends LightningElement {
    imgSource = all+'/resource/style/style.css';
 
    connectedCallback(){
        Promise.all([
            loadStyle(this,all+'/resource/style/style.css')
        ]).then(() => {
            console.log('Css loaded Successfully...');
        });
    }
}