import { LightningElement } from 'lwc';

export default class SkillMatrixUI extends LightningElement {

    displayPage = false;
    handleClick(){
        this.displayPage = !this.displayPage;
    }
}