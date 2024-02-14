import { LightningElement ,wire} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import getAllContacts from '@salesforce/apex/ContactControllerRel.getContacts';
import getActs from '@salesforce/apex/AccountController.getAccounts';

export default class Callrelcontacts extends NavigationMixin(LightningElement)  {
    actList=[];
    accountNm='';
    acctID='';
    conId='';
    @wire(getAllContacts,{actId:'$acctID'})
      conList;
    selectHandler(event)
    {
        this.acctID=event.target.value;
        alert(this.acctID);
    }
    @wire(getActs,{actName:'$accountNm'})
    processAccounts({data,error}){
        if(data)
        {
            for(var i=0;i<data.length;i++)
            {
                this.actList=[...this.actList,{
                    label:data[i].Name, value:data[i].Id}];
                }
            }
            else if(error)
            {
                alert('Error : '+error);
            }
        }
        detailHandler(event)
        {
            this.conId=event.target.value;
            this.pageRef={
                type:'standard__recordPage',
                attributes:{
                    recordId:this.conId,
                    objectApiName:'Contact',
                    actionName:'view'
                },
            };
            this[NavigationMixin.Navigate](this.pageRef);
        }

    }

