import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import TIMECARD_OBJECT from '@salesforce/schema/Timecard__c';
import PROJECT_FIELD from '@salesforce/schema/Timecard__c.Project_Code__c';
// import ACCOUNT_OBJECT from '@salesforce/schema/Account';
// import TYPE_FEILD from '@salesforce/schema/Account.Type';

export default class GetPickListValues extends LightningElement {
    projectvalue ='';

    // to get the default record type id, if you dont' have any recordtypes then it will get master
    @wire(getObjectInfo, { objectApiName: TIMECARD_OBJECT })
    timecardMetadata;

    // now get the project picklist values
    @wire(getPicklistValues,
        {
            recordTypeId: '$timecardMetadata.data.defaultRecordTypeId', 
            fieldApiName: PROJECT_FIELD
        }
    )
    projectPicklist;

    renderedCallback(){
        console.log('**********************'+JSON.stringify(this.projectPicklist.data));
      // console.log(this.projectPicklist);
    }


    // on select picklist value to show the selected value
    handleChange(event) {
        this.projectvalue = event.detail.value;
        //console.log(this.projectvalue);
    }
}