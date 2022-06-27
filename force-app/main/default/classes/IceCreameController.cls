public with sharing class IceCreameController {
    public IceCreameController() {
    }

    @AuraEnabled(cacheable=true)
    public static List<IceCreame__c> fetchIcecreames(){
        List<IceCreame__c> iceList = new List<IceCreame__c>();
        try {
          iceList = [SELECT Id, Name, Type__c, Quantity__c, Icecreame_Packs__c FROM IceCreame__c];   
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return iceList;
    }
}
