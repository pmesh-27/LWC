import { LightningElement } from 'lwc';

export default class Lifecycleexp extends LightningElement {
    isChildShown=false;
    showChild(event)
    {
       this.isChildShown=true;
    }
    hideChild(event)
    {
         this.isChildShown=false;
    }
    
    connectedCallback()
    {
        alert('Parent/s connected callback');
    }
    
    renderedCallback()
    {
        alert('Parent component is rendered');
    }
    errorCallback()
    {
        alert('Parent: Child component threw an error');
    }
    constructor()
    {
        super();
        alert('parent constructor called');
    }
}