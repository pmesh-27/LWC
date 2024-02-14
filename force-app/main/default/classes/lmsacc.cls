public with sharing class lmsacc {
    @AuraEnabled(cacheable=true)
    
    public static Account getAccount () {
        return[select id,name,phone,industry from account where id='0015h00001Utl5TAAR'];
    }
}