import { LightningElement } from 'lwc';

export default class LwcTask extends LightningElement {
    todoList=[
        {
            title:'',
            description:'',
            isDone:false,
        }
    ];
    
}