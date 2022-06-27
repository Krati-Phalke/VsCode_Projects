import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';
import formFactorCmp from './formFactorCmp.html';
import mobile from './mobileTemplate.html';
import tablet from './tabletTemplate.html';

export default class FormFactorCmp extends LightningElement {

    template;

    constructor(){
        super();
        console.log('inside the constructor**********');
    }

    connectedCallback(){
        //this.track='Test';
        console.log('inside parent connectedCallback*************');
    }

    render(){
        console.log('inside render*****************');
        if(FORM_FACTOR =='Large'){
        this.template = formFactorCmp;
          //return FORM_FACTOR === 'Large' ? formFactorCmp : tablet
        }
         if(FORM_FACTOR == 'Medium'){
             this.template = tablet;
         }
         if(FORM_FACTOR=='Small'){
            this.template = mobile;
         }
         return this.template;
    }
}