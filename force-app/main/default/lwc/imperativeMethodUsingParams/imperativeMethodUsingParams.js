import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import verifyUser from '@salesforce/apex/ContactController.verifyUser';

export default class ImperativeMethodUsingParams extends LightningElement {

    name;
    Phone;
    contacts;
    error;

    handleSearch(){
        this.name = this.template.querySelector('.name').value;
        this.Phone = this.template.querySelector('.Phone').value;
        verifyUser({fname: this.name, Phone: this.Phone}) //imperative method calling with params
            .then((result) => {
                if(result == true){
                this.contacts = result;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'success',
                        message: 'valid user',
                        variant: 'success',
                    }),
                );
                }else{
                    this.dispatchEvent(
                        new ShowToastEvent({
                        title: 'error',
                        message: ' not valid user',
                        variant: 'error',
                        }),
                    );
                    this.error = error;
                    }
            })
                .catch((error)=>{
                    this.error = error;
                });
        }
    }
