
const { test, expect } = require('../pages/baseFixtures');



test('TC02_LoginApp', async ({page,hp,lp}) => {
    // const hp = new homePage(page);
    // const lp = new loginPage(page);
    await hp.goto();
    await hp.waitForPageLoad();
    await hp.loginButtonfn();
   
     await expect(lp.logodisplay).toBeVisible();
      await expect(lp.loginTextDisplay).toBeVisible();
      await expect(lp.textIamDisplay).toBeVisible();
    
    await lp.Select.click();
    await lp.Select.click();





    
});
