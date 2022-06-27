import { LightningElement } from 'lwc';
export default class GetterSetterExample extends LightningElement {
    //Defined 3 private variables to store the input values from user 
    numbertoconvert;
    convertedValue;
    selectedOption;
   //get options method which will return the list of options & display in combo-box 
    get options(){
        return [
            { label: '--None--', value: '' },
            { label: 'Second', value: '1000' },
            { label: 'Minute', value: '60000' },
            { label: 'Hour', value: '3.6e+6' },
            { label: 'Day', value: '8.64e+7' }
        ];
    }
    //once the user entered the values in lightning-input, the handleChange() function will be invoked which will update 
    //numbertoconvert class level variable
    handleChange(event) {
        this.numbertoconvert = event.detail.value;
    }
    //the selected value from the picklist wll be collected in the class level variable selectedOption 
    handleSelect(event) {
        this.selectedOption = event.detail.value;
    }
    //after selecting the option of Convert handleClick fxn will invoke where we have assigned the value to this.convert
    //property based on the if-else condition.
    handleClick() {
        this.convert = (this.selectedOption && this.numbertoconvert ? this.numbertoconvert * this.selectedOption : '');
    }
    //When the value is assigned to convert property the SET method “convert(val)” will be invoked automatically 
    //where we are assigning the passed parameter to the convertedValue attribute which will display on UI
    // as output in milliseconds.
    set convert(val) {
        this.convertedValue = val;
    }
}