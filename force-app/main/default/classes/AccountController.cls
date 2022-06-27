public with sharing class AccountController {
    public AccountController() {
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [SELECT Id, Name, Industry, Rating, AnnualRevenue, Website FROM Account Limit 9];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Phone, Industry, Rating
            FROM Account
            WHERE Name LIKE:key
            OR Phone LIKE :key
        ];
    }

    /* Date: 7 May 22 Author Name: Krati Phalke
    Controller  Component : which will insert new Timecard__c record for the current logged in user*/
    @AuraEnabled
    public static Timecard__c insertTimecard(Timecard__c tc){
    
            if(tc!= null){
                System.debug('inside if condition of insertEmployee method*******');
                insert tc;
    }
    return tc;
}
}
