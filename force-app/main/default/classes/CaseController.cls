public with sharing class CaseController {
    @AuraEnabled(cacheable=true)
    public static boolean getCase(String caseId){
       Case cs = [select id,CaseNumber,Origin,ContactId,status,AccountId from Case where AccountId=:caseId];
       if(cs.Status != 'Closed')
       {
        cs.Status = 'Closed';
       }
       update cs;
       return true;
    }
 
    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCase(String actId){
        if(actId == null || actId.equals('')){
            return [select id,CaseNumber,Origin,ContactId,status,AccountId,isClosed from Case];
        }
        else{
            return [select id,CaseNumber,Origin,ContactId,status,AccountId,isClosed from Case where AccountId=:actId];
        }
     
    }
}