import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

   //Conditionally render elements. 
    areDetailsVisible = false; //default it is false

    handleChange(event){
        this.areDetailsVisible = event.target.checked;
    }
}