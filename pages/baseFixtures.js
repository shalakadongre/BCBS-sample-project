
const { test: base, expect } = require('@playwright/test');

const {homePage} = require('../pages/homePage');
const {loginPage} = require('../pages/loginPage');
const {registrationPage} = require('../pages/registrationPage');


   const test = base.extend({
    hp: async ({ page }, use) => {
        const hp = new homePage(page);
        await use(hp);
    },
    rp: async ({ page }, use) => {
        const rp = new registrationPage(page);
        await use(rp);
    },

    lp: async ({ page }, use) => {
        const lp = new loginPage(page);
        await use(lp);
    }
});

//exports.expect = base.expect;
module.exports = { test,expect };
