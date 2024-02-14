import { LightningElement ,wire} from 'lwc';
import getOpportunityList from '@Salesforce/apex/task.getOpportunityList';
import StageName from '@salesforce/schema/Opportunity.StageName';
export default class Task extends LightningElement {
    name = 'Prospecting';

    changeHandler(event){

        this.name = event.target.value;

    }

    @wire(getOpportunityList,{name:'$name'})

    opportunites

}
