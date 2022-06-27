import { LightningElement, track } from 'lwc';

export default class DataReadingUsingClass extends LightningElement {

    @track firstname;
    @track age;

    handleClick(event){
        var mydata = this.template.querySelectorAll(".myinp");
        mydata.forEach(function(element){
            if(element.name == "firstinput"){
            this.firstname= element.value;
            console.log('name*******'+this.firstinput);
            }
            else if(element.name == "secondinput"){
                this.age= element.value;
                console.log('age*******'+this.secondinput);  
            }
        }, this);
    }
}