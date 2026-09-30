const { test, expect } = require('../pages/baseFixtures');


test('TC01_LaunchApp', async ({page,hp,lp}) => {
   
    await hp.goto();
    await hp.waitForPageLoad();
    await expect(hp.page).toHaveTitle('North Carolina Health Insurance Plans | Blue Cross NC');
});

