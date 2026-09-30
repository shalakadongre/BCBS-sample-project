const { test, expect } = require('../pages/baseFixtures');

test('TC05_FindCare', async ({page}) => {
    const hp = new homePage(page);
    await hp.goto();
    await hp.waitForPageLoad();
    await hp.findCareButtonfn();
});
