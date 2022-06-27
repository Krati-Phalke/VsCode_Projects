import { LightningElement, wire, api} from 'lwc';
import IceCreameLogo from '@salesforce/resourceUrl/IceCreameLogo';
import fetchIcecreames from '@salesforce/apex/IceCreameController.fetchIcecreames';
import { NavigationMixin } from 'lightning/navigation';
export default class FetcIceCreames extends LightningElement {

    IceCreameLogo= IceCreameLogo;
    @api recordId;
    icecreames;

   // @wire(fetchIcecreames) icecreames;

    connectedCallback(){
         this.loadiceCreames();
     }

     loadiceCreames(){
         fetchIcecreames()
             .then(result => {
	 			this.icecreames = result;
                 console.log('**********'+result);
	 		})
	 		.catch(error => {
	 			this.error = error;
	 		});
         }

    navigateToViewIceCreamePage(event){
            const refId = event.target.dataset.id;
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: refId,
                    objectApiName: 'IceCreame__c',
                    actionName: 'view'
                },
            });
        }
    }

    // @api recordId;
    // @wire(getRecord, { recordId: 'a015j00000I1JgpAAF', fields: FIELDS })
    // icecreame;
    // get name() {
    //     return this.icecreame.data.fields.Name.value;
    // }
    // get type(){
    //     return this.icecreame.data.fields.Type__c.value;
    // }
    // get quantity(){
    //     return this.icecreame.data.fields.Quantity__c.value;
    // }
    // get icecreamePack(){
    //     return this.icecreame.data.fields.Icecreame_Packs__c.value;
    // }