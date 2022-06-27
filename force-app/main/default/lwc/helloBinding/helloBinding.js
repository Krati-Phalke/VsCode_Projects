import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    //Change the value of a bound property when the value of an input field changes.
    // Type something in the input field to see the recipe in action.

    greeting = 'World';

    handleChange(event){
        this.greeting = event.target.value;
    }
}