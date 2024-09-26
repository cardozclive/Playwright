const { test, expect } = require('@playwright/test');
const {LoginPage} = require('./PageObjects/MsellLogin')

let webContext;

// test.beforeAll("MsellLoginSession", async ({ browser }) => {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://uat-accounts.bharti-axalife.com/authenticationendpoint/custom-agent-code.jsp?client_id=o7f7wVtyNOzdVbHw0Uuf4veZ4d8a&commonAuthCallerPath=%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=https%3A%2F%2Fmsell-uat.bhartiaxa.com%2FMSell%2FProduct.aspx&response_type=code&scope=openid&tenantDomain=carbon.super&sessionDataKey=3f35e1e4-c797-451b-b63a-f9846a473fc3&relyingParty=o7f7wVtyNOzdVbHw0Uuf4veZ4d8a&type=oidc&sp=MSELL&isSaaSApp=false&authenticators=CustomAuthenticator");
//     await page.locator('.agent').click();
//     await page.locator('input#AGENT_CODE_OR_MOBILE').fill('174163');
//     await page.locator('#update').click();
//     await page.waitForLoadState('networkidle');
//     await page.locator('.inptfld.codeotp').fill('123456');
//     await page.locator('#authenticate').click();
//     await context.storageState({ path: 'state1.json' });
//     webContext = await browser.newContext({ storageState: 'state1.json' });
// })

test("@Trial Msell", async ({page}) => {
    const monthNumber = 2;
    const date = 3;
    const loginPage = new LoginPage(page)
    await loginPage.URL();
    await loginPage.ValidLogin();

    // const page = await webContext.newPage();
    // await page.goto("https://uat-accounts.bharti-axalife.com/authenticationendpoint/custom-agent-code.jsp?client_id=o7f7wVtyNOzdVbHw0Uuf4veZ4d8a&commonAuthCallerPath=%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=https%3A%2F%2Fmsell-uat.bhartiaxa.com%2FMSell%2FProduct.aspx&response_type=code&scope=openid&tenantDomain=carbon.super&sessionDataKey=3f35e1e4-c797-451b-b63a-f9846a473fc3&relyingParty=o7f7wVtyNOzdVbHw0Uuf4veZ4d8a&type=oidc&sp=MSELL&isSaaSApp=false&authenticators=CustomAuthenticator");
    await expect(page.locator('span#p-name')).toHaveText("SHILABEN TANKARIYA");
    console.log(await page.locator('.prod-heading').textContent());
    await page.locator('#row-SavingsPlans .col-lg-4.col-md-4.col-sm-12.p-1').last().waitFor();
    await page.screenshot({path: './Screenshot/screenshot.jpg', type: 'jpeg', fullPage: true})
    // await page.getByText('Guaranteed Wealth Pro').click();
    const SavingPlansList =  page.locator('#row-SavingsPlans .col-lg-4.col-md-4.col-sm-12.p-1');
    const SavingsPlanCount = await SavingPlansList.count();
    console.log(SavingsPlanCount)
    const plan = 'Guaranteed Wealth Pro'
    for(let i=0;i<SavingsPlanCount; i++){
            const planName = await SavingPlansList.nth(i).textContent();
        if(planName.includes(plan)){
            SavingPlansList.nth(i).click();
            break;
        }
    }
    // await page.pause();
    // --------
    await page.waitForLoadState('load')
    await page.locator('#txtLifeAssuredFirstName').fill('Girdharilal');
    await page.locator('#txtLifeAssuredLastName').fill('Kumar')
    const dropdown = page.locator('.errLI_GENDER');
    await dropdown.selectOption('Male');
    // await page.pause();
    await page.locator('#txtAge').click();
    await page.locator('.datepicker.datepicker-dropdown.dropdown-menu .datepicker-years .icon-arrow-left').first().click();
    await page.locator('.datepicker.datepicker-dropdown.dropdown-menu .datepicker-years .icon-arrow-left').first().click();
    await page.locator('.datepicker.datepicker-dropdown.dropdown-menu .datepicker-years .icon-arrow-left').first().click();
    await page.getByText('1991').click();
    // page.pause();
    await page.locator('.datepicker-months .month').nth(Number(monthNumber)-1).click();
    // await page.pause();
    // const date = page.locator('.dropdown-menu .datepicker-days .day')
    // const dateCount = date.count();
    // console.log(dateCount);
    // for(let i=0;i<dateCount; i++){

    //     if(await date.nth(i).textContent() === '1'){
    //         await date.nth(i).getByText('1').click();
    //     }
    // }

    await page.locator("//td[text()='6']").first().click();
    // await page.pause()
    const dropdown2 = page.locator('#ddlAgeProof');
    await dropdown2.selectOption('Passport')
    // await page.pause();
//    await context.close(); 


})