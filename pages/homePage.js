const basePage = require('../pages/basePage');

class homePage extends basePage {
    //constructor 
    constructor(page) {
        super(page);
    // locators

    this.shopPlansTab = page.getByRole('button', { name: 'Shop Plans' });
    this.membersTab = page.getByRole('button', { name: 'Members' });
    this.providersTab = page.getByRole('button', { name: 'Providers' });
    this.employersTab = page.getByRole('button', { name: 'Employers' });
    this.agentsTab = page.getByRole('button', { name: 'Agents' }); 
    this.contactUsTab = page.getByRole('link', { name: 'contact us', exact: true });
    this.espanolTab = page.locator('lh-nav-bar').getByText('Español');
    this.magnifyGlassTab = page.getByLabel('magnifying-glass');
    this.loginButton = page.getByRole('button', { name: 'Choose a login option' });
    this.findCareButton = page.getByRole('link', { name: 'Search for a doctor, drug,' });
    this.shopOurPlansButton = page.getByRole('link', { name: 'Shop our plans' });
    this.individualAndFamilyContainer= page.getByRole('link', { name: 'Individual & Family' });
    this.medicareContainer= page.getByRole('link', { name: 'Medicare' });
    this.businessContainer= page.getByRole('link', { name: 'Business' });
    this.learnMoreAboutUsButton= page.getByRole('link', { name: 'Learn more about us' });
    this.findALocationNearYou = page.getByRole('link', { name: 'Find Blue Cross NC locations' });
    this.exploreCarrerLink = page.getByRole('link', { name: 'Explore career openings' });
    this.visitOurBlogLink = page.getByRole('link', { name: 'Visit Our Blog' });
    this.secureEmailContainer = page.getByRole('link', { name: 'Secure Email Log in to the' });
    this.liveChatContainer = page.getByRole('link', { name: 'Live Chat Log in to the' });
    this.visitContainer = page.getByRole('link', { name: 'Live Chat Log in to the' });
    this.callContainer = page.getByRole('link', { name: 'Live Chat Log in to the' });
    this.nutriforHealtherNCBox = page.getByText('Nutrition for a Healthier NC Learn how Health Through Food is driving better');
    this.sharedCommitmentBox = page.getByText('A shared commitment to recovering from a natural disaster Discover how');
    this.addressingDiaperNeedBox = page.getByText('Addressing diaper need across NC Learn how Blue Cross NC and the Diaper Bank of');    
    this.provideFeedBackLink = page.getByRole('button', { name: 'Provide your feedback' });


}
    
    //methods
   

    async clickShopPlansTabfn() {
        await this.shopPlansTab.click();
    }   
    async clickMembersTabfn() {
        await this.membersTab.click();
    }   
    async clickProvidersTabfn() {
        await this.providersTab.click();
    }   
    async clickEmployersTab() {
        await this.employersTab.click();
    }   
    async clickAgentsTabfn() {
        await this.agentsTab.click();
    } 
    async clickcontactUsTabfn() {
        await this.contactUsTab.click();
    }   
    async espanolTabfn() {
        await this.espanolTab.click();
    }
    async magnifyGlassTabfn() {
        await this.magnifyGlassTab.click();
    }   
    async loginButtonfn() {
        await this.loginButton.click();
    }
    
    async findCareButtonfn() {
        await this.findCareButton.click();      
    }

    async shopOurPlansButtonfn(){
        await this.shopOurPlansButton.click();
    }

    async individualAndFamilyContainerfn(){
        await this.individualAndFamilyContainer.click();    
    }

    async medicareContainerfn(){
        await this.medicareContainer.click();    
    }

    async businessContainerfn(){
        await this.businessContainer.click();    
    }

    async findALocationNearYoufn() {
        await this.findALocationNearYou.click();
    }

    async  exploreCarrerLinkfn(){
        await this.exploreCarrerLink.click();   
    }

    async visitOurBlogLinkfn(){
        await this.visitOurBlogLink.click();   
    }

    async secureEmailContainerfn(){
        await this.secureEmailContainer.click();
    }
    
    async liveChatContainerfn(){
        await this.liveChatContainer.click();
    }

    async visitContainerfn(){
        await this.visitContainer.click();  
    }

    async callContainerfn(){
        await this.callContainer.click();  
    }

    async clickNutritionForAHealthierNCTabfn() {
        await this.nutriforHealtherNCBox.click();
    }       
    async clickSharedCommitmentTabfn() {
        await this.sharedCommitmentBox.click();
    }       
    async clickAddressingDiaperNeedTabfn() {
        await this.addressingDiaperNeedBox.click();
    }       
    async clickProvideFeedbackTabfn() {
        await this.provideFeedBackLink.click();
    }           



}

module.exports = { homePage };