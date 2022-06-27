public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT
                Id,
                Name,
                FirstName,
                LastName,
                Title,
                Phone,
                Email
            FROM Contact
            LIMIT 10
        ];
    }

     @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
         String key = '%' + searchKey + '%';
         return [
             SELECT Id, FirstName, LastName, Title, Phone, Email
             FROM Contact
             WHERE FirstName LIKE : key
             OR Phone LIKE : key
             OR LastName LIKE : key
         ];
     }

    // @AuraEnabled(cacheable=true)
    // public static Contact getSingleContact() {
    //     return [
    //         SELECT Id, Name, Title, Phone, Email, Picture__c
    //         FROM Contact
    //         WITH SECURITY_ENFORCED
    //         LIMIT 1
    //     ];
    // }

    @AuraEnabled
    public static Boolean verifyUser(String fname, String Phone){
       List<Contact> conList = [Select Id, Name, Title, FirstName, Phone
                FROM Contact 
                WHERE FirstName =: fname 
                AND
                Phone =: Phone];
        if(conList.size()>0){
            return true;
        }
        else {
            return false;
        }
    }

    @AuraEnabled
    public static void updateContacts(List<Contact> contactsForUpdate) {
        // Make sure we can update the database before trying to update
        if (!Schema.sObjectType.Contact.isUpdateable()) {
            throw new SecurityException(
                'Insufficient permissions to update contacts'
            );
        }
        update contactsForUpdate;
    }
}
