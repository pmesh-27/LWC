public with sharing class Cont1 {
    @AuraEnabled(cacheable=true)
    public static list<Contact> getAllContact(String field, String sortOrder){
    String query;
    query = 'SELECT Id, FirstName, LastName, Phone, Email,Account.Name FROM Contact';
    if(field != null && sortOrder !=null){
    query += ' ORDER BY '+field+' '+sortOrder;
    }
    return Database.query(query);
    }
    }