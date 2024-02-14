public with sharing class AccountControllera {
    @AuraEnabled(cacheable=true)
    
    public static List<Account> getAccountList(String industry)
    {
        if(industry.equals(' ')|| industry==null)
        {
            return [select Id, Name, Type, Industry from Account WITH SECURITY_ENFORCED];
        }
        else 
            {
               return [select Id, Name, Type, Industry from Account where industry=:industry WITH SECURITY_ENFORCED];
            }
        
    }
}