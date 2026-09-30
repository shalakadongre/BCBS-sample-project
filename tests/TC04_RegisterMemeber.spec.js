const { test, expect } = require('../pages/baseFixtures');

test('TC04_RegisterMember', async ({page,hp,lp,rp}) => {

    await hp.goto();
    await hp.waitForPageLoad();

    await hp.loginButtonfn();
  
    await lp.registerfn();
    
    await expect(rp.page).toHaveTitle('Members | Blue Cross NC');
    await expect(rp.findyourplantext).toBeVisible();
    await expect(rp.progresstracker).toBeVisible();
    await rp.medicarePlanRadio.click();
    await expect(rp.usingMemberIdCardRadio).toBeVisible();
    await expect(rp.usingPersonalInfoRadio).toBeVisible();
    await rp.usingPersonalInfoRadio .click();
    await expect(rp.agecondition).toBeVisible();
    //await expect(rp.continuebutton).toBeVisible();
    //await rp.continuebutton.click();


})