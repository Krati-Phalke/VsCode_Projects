import { LightningElement } from 'lwc';

export default class DataReadingUsingProperty extends LightningElement {
    firstName;
    lastName;

    handleNameChange(event){
     this.firstName = event.target.value;
    }

    handleLastNameChange(event){
        this.lastName = event.target.value;
    }

    // handleButton(){
    //     this.template.querySelector('lightning-input');
    // }


}