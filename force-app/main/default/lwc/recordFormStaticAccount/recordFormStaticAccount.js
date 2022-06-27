import { LightningElement, api } from 'lwc';
import ACCOUNT_FEILD from '@salesforce/schema/Account.Id'
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class RecordFormStaticAccount extends LightningElement {

    @api recordId;
    @api objectApiName;

    feilds = [ACCOUNT_FEILD, NAME_FIELD, RATING_FIELD, PHONE_FIELD, INDUSTRY_FIELD];
}