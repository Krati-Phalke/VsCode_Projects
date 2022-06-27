import { LightningElement, track, wire} from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';

export default class WireToFunctionWithParameter extends LightningElement {

    @track searchKey;
    @track contacts;
    @track err; 

    @wire(findContacts,{searchKey:'$searchKey'})
    wireContactsData({error,data}){
        if(data){
            this.contacts = data;
        }else if(error){
            this.err = error;
        }
    }
    
    // handleChangess(event){
    //     this.searchKey = event.target.value;
    // }     

    handleSearch(){
        this.searchKey = this.template.querySelector('lightning-input').value;
    }
 
    // searchContact(event){        
    //     this.searchKey = event.target.value;        
    // }
 
    // @wire(findContacts, {searchKey:'$searchKey'})
    // wiredContacts({data, error}){
    //     if(data){
    //         this.contacts = data;
    //         this.error = undefined;
    //     }
    //     else if (error) {
    //         this.error = error;
    //         this.contacts = undefined;
    //     }
    // }
}