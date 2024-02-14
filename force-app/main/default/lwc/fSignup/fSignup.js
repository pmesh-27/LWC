import { LightningElement } from 'lwc';

export default class FSignup extends LightningElement {
    firstname = '';
    lastname = '';
    email = '';
    password = '';
 
    handleInputChange(event) {
        const field = event.target.name;
        this[field] = event.target.value;
    }
 
    handleSignup(event) {
        event.preventDefault(); // Prevent the form from refreshing the page on submit
        // Here you would typically call an Apex method to register the user
        console.log(`Signing up with firstname: ${this.firstname}, lastname: ${this.lastname}, email: ${this.email}, password: ${this.password}`);
        // Perform further actions based on the signup result
    }
 
    navigateToLogin(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('login'));
    }
 
    renderedCallback() {
        this.template.querySelector('form').addEventListener('submit', this.handleSignup.bind(this));
    }
}
