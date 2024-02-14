public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static Contact getContact(){
        return [select id, name, email, phone from Contact limit 1];
    }


    
}