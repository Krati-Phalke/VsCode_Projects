import { LightningElement } from 'lwc';

export default class LightningLayoutDesign4 extends LightningElement {
    value = '';
    displayPage = false;

    get options() {
        return [
            { label: 'Job', value: 'option1' },
            { label: 'House wife', value: 'option2' },
        ];
    }

    handleClick(){
        this.displayPage = !this.displayPage;
    }

    countryOptions = [
        { label: 'United States', value: 'US' },
        { label: 'United Kingdom', value: 'UK' },
        { label: 'Germany', value: 'GER' },
    ];

    get getCountryOptions() {
        return this.countryOptions;
    }

    handleChange(event) {
        this._country = event.detail.country;
    }

    countryProvinceMap = {
        US: [
            { label: 'California', value: 'CA' },
            { label: 'Texas', value: 'TX' },
            { label: 'Washington', value: 'WA' },
        ],
        UK: [
            { label: 'London', value: 'Lon' },
            { label: 'Manchester', value: 'Man' },
            { label: 'Bristol', value: 'BST' },
        ],
        GER: [ 
            { label: 'Berlin', value: 'BER' },
            { label: 'Frankfurt', value: 'Fran' },],
    };

    address = {
        street: '121 Spear St.',
        city: 'San Francisco',
        province: 'CA',
        postalCode: '94105',
        country: 'US',
    };

    _country = 'US';

    // handleClick()
    // {
    //     console.log('inside handleclick');
    //     this.displayPage = true;
    //     if(FORM_FACTOR==='Large')
    //     {
    //         this.large = 'large';
    //         console.log('large'+this.large);
    //     }
    //     else if(FORM_FACTOR==='Medium')
    //     {
    //         this.medium = 'medium';
    //     }
    //     else if(FORM_FACTOR==='Small')
    //     {
    //         this.small = 'small';
    //     }   
    // }
}