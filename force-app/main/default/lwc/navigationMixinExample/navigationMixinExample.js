import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationMixinExample extends NavigationMixin(LightningElement) {

    @api recordId;

    // Navigation to Employee List view(recent)
    navigateToEmployeeListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Employee_Detail__c',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }

    // Navigation to Browser 
    navigateToBrowser() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://www.google.com/"
            }
        });
    }

    //Navigate to knowledge Acrticle
    navigateToKnowledgeArticle() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_navigate_basic"
            }
        });
    }

    // Navigation to Employee related list of Account
    navigateToEmployeeRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                relationshipApiName: 'Employee__c',
                actionName: 'view'
            },
        });
    }

    // Navigate to New Account Page
    navigateToNewAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
        });
    }
    // Navigate to View Account Page
    navigateToViewAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                actionName: 'view'
            },
        });
    }

    // Navigate to Edit Account Page
    navigateToEditAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                actionName: 'edit'
            },
        });
    }

    //Navigate to home page
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            },
        });
    }
    // Navigation to contant object home page
    navigateToContactHome() {
        this[NavigationMixin.Navigate]({
            "type": "standard__objectPage",
            "attributes": {
                "objectApiName": "Contact",
                "actionName": "home"
            }
        });
    }
    //Navigate to chatter
    navigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            },
        });
    }
    //Navigate to Reports
    navigateToReports() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'home'
            },
        });
    }
    //Navigate to Files home
    navigateToFilesHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            },
        });
    }
    // Navigation to lightning component
    navigateToLightningComponent() {
        this[NavigationMixin.Navigate]({
            "type": "standard__component",
            "attributes": {
                //Here customLabelExampleAura is name of lightning aura component
                //This aura component should implement lightning:isUrlAddressable
                "componentName": "c__customLabelExampleAura"
            }
        });
    }
    
    //Navigate to visualforce page
    navigateToVFPage() {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__webPage',
            attributes: {
                url: '/apex/home?id=' + '0065g00000E7bJkAAJ'
            }
        }).then(generatedUrl => {
            window.open(generatedUrl);
        });
    }
    // Navigation to Custom Tab
    navigateToTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                apiName: 'Search_Leads'
            },
        });
    }

}