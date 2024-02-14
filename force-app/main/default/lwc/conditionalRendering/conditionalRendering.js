import { LightningElement } from 'lwc';
import isGuestUser from '@salesforce/user/isGuest'
export default class ConditionalRendering extends LightningElement {}
{
    isGuestU=isGuestUser;
}