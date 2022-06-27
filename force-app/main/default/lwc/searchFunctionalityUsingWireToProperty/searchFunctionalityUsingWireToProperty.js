import { LightningElement, wire } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';

export default class SearchFunctionalityUsingWireToProperty extends LightningElement {

    searchKey;
    showSpinner = false;

    @wire(findAccounts, { searchKey: '$searchKey'})
    accounts;
    
    handleSearch(){
        this.showSpinner = true;
        this.searchKey = this.template.querySelector('lightning-input').value;
    }

    // handleKeySearch(event){
    //     this.searchKey = event.target.value;
    // }

    
}