import { LightningElement } from 'lwc';

export default class LightningLayoutDesign2 extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Job', value: 'option1' },
            { label: 'House wife', value: 'option2' },
        ];
    }
}