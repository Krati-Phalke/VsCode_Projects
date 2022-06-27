import { LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id'; //this is how you will retreive the USER ID of current in user.
import NAME_FIELD from '@salesforce/schema/User.Name';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import TIMECARD_OBJECT from '@salesforce/schema/Timecard__c';
import PROJECT_FIELD from '@salesforce/schema/Timecard__c.Project__c';

export default class LwcFinalTask extends LightningElement {
    projectvalue ='';
    
    @track error ;
    @track name;

    /*to get current user name*/
     @wire(getRecord, {
         recordId: USER_ID,
         fields: [NAME_FIELD]
     }) wireuser({
         error,
         data
     }) {
         if (error) {
            this.error = error ; 
         } else if (data) {
             this.name = data.fields.Name.value;
         }
     }

     // to get the default record type id, if you dont' have any recordtypes then it will get master
     @wire(getObjectInfo, { objectApiName: TIMECARD_OBJECT })
     timecardMetadata;
 
     //fetching values of Project picklist
     @wire(getPicklistValues,
        {
          recordTypeId: '$timecardMetadata.data.defaultRecordTypeId', 
          fieldApiName: PROJECT_FIELD
        }
     )
     projectPicklist;
 
     // on select picklist value to show the selected value
      handleChange(event) {
        this.projectvalue = event.detail.value;
     }

     /** to create a record*/
}