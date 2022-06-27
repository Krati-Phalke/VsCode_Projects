import { LightningElement } from 'lwc';
import welcomeHeader from '@salesforce/label/c.Welcome_Header';
import WelcomeText from '@salesforce/label/c.WelcomeText';
import Firstname from '@salesforce/label/c.First_Name';
import Lastname from '@salesforce/label/c.Last_Name';
import Email from '@salesforce/label/c.Email';
import EmailPlaceholder from '@salesforce/label/c.Email_Placeholder'
import Contact from '@salesforce/label/c.Contact_Number';
import favoriteSeason from '@salesforce/label/c.Favourite_Season_Label';
import SeasonPlaceholder from '@salesforce/label/c.Favorite_Season_Placeholder';
import Spring from '@salesforce/label/c.Spring_Season';
import Summer from '@salesforce/label/c.Summer_Season';
import Winter from '@salesforce/label/c.Winter_Season';
import Fall from '@salesforce/label/c.Fall_Season';
import submitButton from '@salesforce/label/c.Submit_Button_Label';

export default class I18nExample2 extends LightningElement {
    firstName;
    lastname;
    contact;
    email;
    season;
    
    label ={
        welcomeHeader,
        WelcomeText,
        Firstname,
        Lastname,
        Email,
        Contact,
        favoriteSeason,
        submitButton
    };

    placeholder ={
        EmailPlaceholder,
        SeasonPlaceholder
    };
    seasons = [
        {value: "1", label: Spring},  
        {value: "1", label: Summer},
        {value: "1", label: Winter},
        {value: "1", label: Fall},
    ];   

    options={
        Spring,
        Summer,
        Winter,
        Fall
    };

    handleClick(){
    }
}