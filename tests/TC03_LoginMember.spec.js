const { test, expect } = require('../pages/baseFixtures');

test('TC03_LoginMember', async ({page,hp,lp}) => {
    
    await hp.goto();
    await hp.waitForPageLoad();

    await hp.loginButtonfn();
    await lp.memberLoginfn();


})