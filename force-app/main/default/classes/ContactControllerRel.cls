public with sharing class ContactControllerRel {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String actId){
        List<contact> conList;
        if(String.isNotBlank(actId))
        {
            conList=[select id,name,Account.name,email,phone from contact where accountId=:actId];
        }
        else {
            conList=[select id,name,Account.Name,email,phone from contact];
        }
        return conList;
    }
    
}