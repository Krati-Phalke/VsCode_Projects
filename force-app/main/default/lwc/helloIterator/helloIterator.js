import { LightningElement } from 'lwc';

export default class HelloIterator extends LightningElement {
 
    //Loop through an array with special behavior for the first and last items.

    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Title: 'VP of Engineering'
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Title: 'VP of Sales'
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Title: 'CEO'
        },
        {
            Id: '003145278963452310',
            Name: 'Chris Hemsworth',
        }
    ];
}