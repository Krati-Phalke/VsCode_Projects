import { LightningElement } from 'lwc';
import myLabel from '@salesforce/label/c.myLabel';
import name from '@salesforce/label/c.name';

export default class CustomLabels extends LightningElement {

    label= {
        myLabel,
        name
    };

}