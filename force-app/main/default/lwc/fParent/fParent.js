import { LightningElement,track } from 'lwc';

export default class FParent extends LightningElement {
    @track showLogin = true;
 
    handleNavigateToSignup() {
        this.showLogin = false;
    }
 
    handleNavigateToLogin() {
        this.showLogin = true;
    }
}