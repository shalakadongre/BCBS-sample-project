const basePage = require('../pages/basePage');

class registrationPage extends basePage {
    //constructor 
    constructor(page) {
        super(page);
    // locators
   
    this.progresstracker = page.getByRole('list', { name: 'progress tracker' })
    this.findyourplantext = page.getByRole('heading', { name: 'Find your plan' });
    this.medicarePlanRadio = page.getByRole('radio', { name: 'Medicare plan' });
    this.healthPlanRadio = page.getByRole('radio', { name: 'Health plan' });
    this.dentalPlanRadio = page.getByRole('radio', { name: 'Dental plan' });
    this.visionPlanRadio = page.getByRole('radio', { name: 'Vision plan' });  

    this.usingMemberIdCardRadio = page.getByRole('radio', { name: 'Using a member ID card' });
    this.usingPersonalInfoRadio = page.getByRole('radio', { name: 'Using personal information' });
    this.agecondition = page.getByRole('paragraph');
    this.continuebutton = page.locator('.lh-button.lh-button--variant-filled.lh-button--size-medium.lh-button--full-width')
}
}

module.exports = { registrationPage };