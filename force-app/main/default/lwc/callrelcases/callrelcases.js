import { LightningElement, wire } from 'lwc';

import getacc from '@salesforce/apex/AccountController.getAccountList';

import getAllCase from '@salesforce/apex/CaseController.getAllCase';

import getcase from '@salesforce/apex/CaseController.getCase';



export default class CaseController extends LightningElement {

actList = [];

accountName = '';

acctId = '';

caseid = '';

isClosed = false;



@wire(getAllCase,{actId:'$acctId'})

caseList;



@wire(getacc,{actName : '$accountName'})

processAccounts({data,error})

{

    if(data)

    {

        for(let i=0;i<data.length;i++)

        {

            this.actList = [...this.actList,{

                label:data[i].Name,value:data[i].Id}];

        }

    }

    
}



selectHandler(event)

{
   alert('ala re');
    this.acctId = event.target.value;

}
}
