import { LightningElement, wire } from 'lwc';
import backgroungImage from '@salesforce/resourceUrl/backgroungImage';
import Id from '@salesforce/community/Id';
import {CurrentPageReference} from 'lightning/navigation';

export default class LightningLayoutDesign3 extends LightningElement {
    value = '';

   // @wire(CurrentPageReference) pageRef;

    get options() {
        return [
            { label: 'Job', value: 'option1' },
            { label: 'House wife', value: 'option2' },
        ];
    }

    get backgroundStyle() {
        return `height:50rem;background-image:url(${backgroungImage})`;
    }
}