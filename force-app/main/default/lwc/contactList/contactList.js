import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {

    ContactList=[
        {
            id:100,
            Name: 'Teja Acct',
            firstName: 'Krishna',
            lastName: 'Teja',
            age:'23',
            contact: '12344',
            email:'krishna@relanto.ai'
        },
        {
            id:101,
            Name: 'Anjani Acct',
            firstName: 'Anjaniya',
            lastName: 'Prabhu',
            age:'24',

            contact: '12345',
            email:'aprabhu@relanto.ai' 
        },
        {
            id:102,
            Name: 'Shasha Acct',
            firstName: 'Shasha',
            lastName: 'K',
            age:'25',

            contact: '123456',
            email:'shasha@relanto.ai' 
        },

    
    ];
}