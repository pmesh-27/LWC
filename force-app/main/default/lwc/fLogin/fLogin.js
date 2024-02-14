import { LightningElement } from 'lwc';

export default class FLogin extends LightningElement {
    username = '';
    password = '';
 
    handleUsernameChange(event) {
        this.username = event.target.value;
    }
 
    handlePasswordChange(event) {
        this.password = event.target.value;
    }
 
    handleLogin(event) {
        event.preventDefault(); // Prevent the form from refreshing the page on submit
        // Here you would typically call an Apex method to perform the login
        console.log(`Logging in with username: ${this.username} and password: ${this.password}`);
        // Perform further actions based on the login result
    }
 
    navigateToSignup(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('signup'));
    }
 
    renderedCallback() {
        this.template.querySelector('form').addEventListener('submit', this.handleLogin.bind(this));
    }
}