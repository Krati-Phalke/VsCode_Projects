import { LightningElement } from 'lwc';
const numbers = [45, 4, 9, 16, 25];

export default class ArrayIterationInLWC extends LightningElement {

    

    doSomething(){
        let txt = '';
        this.template.querySelector('numbers');
        console.log();
        numbers.forEach(doSomething);
    }


}