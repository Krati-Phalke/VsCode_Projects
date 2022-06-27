import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class WireToProperty extends LightningElement {

    @wire(getAccounts) accounts;
}