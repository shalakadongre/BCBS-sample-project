const basePage = require('../pages/basePage');

class loginPage extends basePage {

    constructor(page) {
        super(page);     // Calls BasePage constructor

    // locators
        this.Select = page.getByRole('button', { name: 'Please select' });
        this.memberLogin = page.locator('.lh-option').first();
        this.providerLogin = page.locator('lh-option:nth-child(2) > .lh-option');
        this.employerLogin = page.locator('lh-option:nth-child(3) > .lh-option');
        this.agentLogin = page.locator('lh-option:nth-child(4) > .lh-option');
        this.logodisplay = page.locator('#content-zone').getByRole('img', { name: 'Blue Cross and Blue Shield of' });
        this.loginTextDisplay = page.getByRole('heading', { name: 'Log In' });
        this.textIamDisplay = page.locator('.lh-select__label');
        this.username = page.getByRole('textbox', { name: 'Username *' });
        this.continueToLogin = page.getByText('Continue to Log In');
        this.password = page.getByRole('textbox', { name: 'Password *' });
        this.loginbtn = page.getByRole('button', { name: 'Log In' });
        this.registerbtn = page.getByRole('button', { name: 'Register', exact: true });
    }


        async memberLoginfn() {
            await this.memberLogin.click();
            await this.username.fill('John Testmember');
            await this.continueToLogin.click();
            await this.password.fill('MemberPassword123!');
            await this.loginbtn.click();

        }
        async registerfn() {
            await this.memberLogin.click();
            await this.username.fill('John Testmember');
            await this.continueToLogin.click();
            await this.password.fill('MemberPassword123!');
            await this.registerbtn.click();
        }
    }
module.exports = { loginPage };