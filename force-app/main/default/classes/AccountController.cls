public with sharing class AccountController {

@AuraEnabled(cacheable=true)

public static List<Account> getAccountList(String actName){

    if(actName == ' ' || actName == null)

    {

        return [select id,Name,Type,Industry from Account];

    }

    else

    {

        return [select id,Name,Type,Industry from Account where name=:actName];


    }

    

}

}