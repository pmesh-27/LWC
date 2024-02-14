import { LightningElement } from 'lwc';

export default class Lifecycleex extends LightningElement {
    constructor(){
        super()
        alert("child constructor called");
    }
    connectedCallback(){
        alert("child connectedcallback called");
        throw new error('Connecting of child component failed');
    }

    renderedCallback(){
        alert("child renderedcallback called");
    }
    disconnectedCallback(){
        alert("child disconnected callback called");
    }
}