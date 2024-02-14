public with sharing class Task {
    @AuraEnabled(cacheable=true)

    public static List<Opportunity> getOpportunityList(String name){

        return [select name,stagename from Opportunity where Stagename=:name];

    }

}