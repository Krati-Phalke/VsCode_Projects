import { LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id'; //this is how you will retreive the USER ID of current in user.
import NAME_FIELD from '@salesforce/schema/User.Name';
import { getObjectInfo} from 'lightning/uiObjectInfoApi';
import { getPicklistValues} from 'lightning/uiObjectInfoApi';
import TIMECARD_OBJECT from '@salesforce/schema/Timecard__c';
import PROJECT_FIELD from '@salesforce/schema/Timecard__c.Project_Code__c';
import TASK_FIELD from '@salesforce/schema/Timecard__c.Task_code__c';
import MONDAY from '@salesforce/schema/Timecard__c.Monday__c';
import TUESDAY from '@salesforce/schema/Timecard__c.Tuesday__c';
import WEDNESDAY from '@salesforce/schema/Timecard__c.Wednesday__c	';
import THURSDAY from '@salesforce/schema/Timecard__c.Thursday__c';
import FRIDAY from '@salesforce/schema/Timecard__c.Friday__c';
import insertTimecard from '@salesforce/apex/AccountController.insertTimecard';

export default class LwcFinalTask extends LightningElement {
    projectvalue ='';
    taskvalue ='';

    @track error ;
    @track name;
    @track tuesday;
    @track monday;
    @track wednesday;
    @track thursday;
    @track friday;
    @track total;

    @track getTimecardRecord={
        monday:MONDAY,       
        tuesday:TUESDAY,  
        wednesday:WEDNESDAY, 
        thursday:THURSDAY,         
        friday:FRIDAY,
        name:NAME_FIELD,
        projectvalue:PROJECT_FIELD,
        taskvalue:TASK_FIELD    
    };   
    
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
    @wire(getObjectInfo, { objectApiName:TIMECARD_OBJECT })
    timecardMetadata;

    // now get the project picklist values
    @wire(getPicklistValues,
        {
            recordTypeId:'$timecardMetadata.data.defaultRecordTypeId', 
            fieldApiName:PROJECT_FIELD
        }
    )
    projectPicklist;

    @wire(getPicklistValues, {recordTypeId:'$timecardMetadata.data.defaultRecordTypeId', fieldApiName:TASK_FIELD})
    taskPicklist;

    // on select picklist value to show the selected value
    handleChange(event){
        let projectvalue = event.detail.value;
        console.log(this.projectvalue);
    }

    handleChangeTask(event){
        let taskvalue = event.detail.value;
        console.log(this.taskvalue);
    }

     /** taking input feilds*/
        handleClick(event){
        var mydata = this.template.querySelectorAll(".collectInput");
        mydata.forEach(function(element){
            if(element.name == "firstinput"){
            this.monday= element.value;
            console.log('mon*******'+this.monday);
            }
            else if(element.name == "secondinput"){
                this.tuesday= element.value;
                console.log('tues*******'+this.tuesday);  
            }
            else if(element.name == "thirdinput"){
                this.wednesday= element.value;
                console.log('wed*******'+this.wednesday);  
            }
            else if(element.name == "fourthinput"){
                this.thursday= element.value;
                console.log('thurs*******'+this.thursday);  
            }
            else if(element.name == "fifthinput"){
                this.friday= element.value;
                console.log('f*******'+this.friday);  
            }
        }, this);

            this.total= Number(this.monday) + Number(this.tuesday) + Number(this.thursday)+ Number(this.wednesday)+ 
            Number(this.friday);
            console.log("total**************8"+total);
    }

           /** saveTimecard(){
                //window.console.log('before save' + this.createAccount);
                insertTimecard({timecardObj:this.getTimecardRecord})
                .then(result=>{
                  window.console.log(this.createAccount);
                    this.getTimecardRecord={};
                    this.accountid=result.Id;
                    window.console.log('after save' + this.accountid);
                    
                    const toastEvent = new ShowToastEvent({
                      title:'Success!',
                      message:'Account created successfully',
                      variant:'success'
                    });
                    this.dispatchEvent(toastEvent);
                })
                .catch(error=>{
                   this.error=error.message;
                   window.console.log(this.error);
                });
              }
        }

        /*summation(){
            this.total = Number(this.monday) + Number(this.tuesday) + Number(this.thursday) + Number(this.wednesday)+ 
            Number(this.friday);
            console.log("total**************8"+total);
        }*/
    }