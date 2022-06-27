import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastMessageExample2 extends LightningElement {

    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'success',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    handleButtonClick(){
        const event = new ShowToastEvent({
            title: 'Success!',
            message: '{0} See it {1}!',
            variant: 'success',
            messageData: ['google is going to open', {url: 'https://www.google.com', label: 'Click Here',
        },
      ],
    });
    this.dispatchEvent(event);
    }
}