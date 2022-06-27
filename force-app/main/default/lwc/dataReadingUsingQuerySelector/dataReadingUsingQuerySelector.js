import { LightningElement } from 'lwc';

export default class DataReadingUsingQuerySelector extends LightningElement {

    //for one lightning input
    // handleButton(){
    //    this.template.querySelector('lightning-input');
    // }

    handleButton(){
        var inputElements = this.template.querySelectorAll('lightning-input');
        inputElements.forEach(element => {
            if(element.name =='firstName'){
                this.firstName= element.value;
                console.log('*****fisrtname'+firstName);
            }
            if(element.name =='lastName'){
                this.lastName= element.value;
                console.log('lastName*******'+lastName);
            }
        });
    }


}