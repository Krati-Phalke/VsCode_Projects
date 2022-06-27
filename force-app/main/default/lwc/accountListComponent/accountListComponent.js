import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountListComponent extends LightningElement {

   // @wire(getAccounts) accounts; 
    accounts;
    error;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
            console.log('inside data*********'+data)
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }
}