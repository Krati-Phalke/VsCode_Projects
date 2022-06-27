import { LightningElement, wire } from 'lwc';
import TIME_ZONE from '@salesforce/i18n/timeZone';

export default class DifferentTimeZone extends LightningElement {

     timeZone = TIME_ZONE;
}