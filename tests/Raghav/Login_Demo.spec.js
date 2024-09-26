const { test, expect } = require("@playwright/test");

test("Applitool login demo", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demo.applitools.com/");
    await page.locator("#username").fill("Raghav");
    await page.locator('[placeholder="Enter your password"]').fill("1234")
    await page.locator('[type="checkbox"]').click();
    await page.locator("text=Sign in").click();
    await page.locator('text = ACME').isVisible();
})

test("OrangeHRM login Demo", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web");

    //grabing username
    const userNameString = await page.locator("div[class='orangehrm-login-error'] p:nth-child(1)").textContent();
    const userName = await userNameString.split(": ")[1];
    console.log(userName);

    //grabing password
    const passwordString = await page.locator("div[class='orangehrm-login-error'] p:nth-child(2)").textContent();
    const password = await passwordString.split(": ")[1];
    console.log(password);

    //entering username
    await page.locator('[placeholder="Username"]').fill(userName);

    //entering password
    await page.locator("input[type='password']").fill(password);

    //clicking on login button
    await page.click(".orangehrm-login-button");
    page.on("dialog", dialog => dialog.accept());

    //clicking on PIM
    await page.locator("[href*='PimModule']").click();

    //clicking on delete button to delete user
    await page.locator('(//i[@class="oxd-icon bi-trash"])[2]').click();

    //clicking on Yes button
    await page.locator('.oxd-button--label-danger').click();

    //catching the successfull message and printing in console log
    // const Deletionconfirmation = await page.locator('.oxd-text--toast-message').textContent();
    // await console.log(Deletionconfirmation);

    // //Assertion to see if the confirmation is displayed
    // await expect(page.locator('.oxd-text--toast-message')).toHaveText("Successfully Deleted");

    // await page.pause();

    //clicking on add button
    await page.locator("[class='orangehrm-header-container'] [type='button']").click();

    //entering first name
    await page.locator('[name="firstName"]').fill("Testing");

    //entering last name
    await page.getByPlaceholder('Last Name').fill("CCC");

    //Entering Employee ID
    await page.locator('[class="oxd-grid-item oxd-grid-item--gutters"] [class="oxd-input oxd-input--active"]').fill("0303");

    await page.pause();

    //Asserting if the employee ID already exist
    await expect(page.locator(".oxd-input-field-error-message")).toHaveText("Employee Id already exists")
    console.log(await page.locator(".oxd-input-field-error-message").textContent());

    //Entering New Employee ID
    await page.locator('form').getByRole('textbox').nth(4).clear();
    await page.locator('form').getByRole('textbox').nth(4).fill("501");

    //clicking on save button
    await page.locator('[type="submit"]').click();

    //catching the successfull message and printing in console log
    // const Saveconfirmation = await page.locator('.oxd-text--toast-message').textContent();
    // await console.log(Saveconfirmation);

    //Assertion to see if the confirmation is displayed
    // await expect(page.locator('.oxd-text--toast-message')).toHaveText("Successfully Saved");

    //clicking on Nationality
    await page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").click()

    //clicking on Indian from the list
    await page.locator(".oxd-select-dropdown.--positon-bottom", { hasText: 'Indian' }).click();

    //clicking on Marital Status dropdown
    await page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[2]").click();

    //clicking on Single
    await page.click(".oxd-select-dropdown.--positon-bottom", { hasText: 'Single' });

    //clicking on Date of Birth
    await page.getByPlaceholder("yyyy-dd-mm").click();

    //clicking on year
    await page.locator("[class='oxd-calender-selector-year']").click();

    // clicking on 1991
    await page.locator(".oxd-calender-dropdown--option", { hasText: '1991' }).click();

    //clicking on Month
    await page.locator("[class='oxd-calender-selector-month']").click();

    //clicking on Feb
    await page.locator(".oxd-calender-dropdown--option", { hasText: 'May' }).click();

    //clicking on date
    await page.locator("[class='oxd-calender-selector-date']", { hasText: '15' }).click();

    //clicking on gender Male
    await page.getByLabel("Male").click();

    //clicking on Save button
    await page.locator('[type="submit"]').click();



    // --------------------------------------------------------------------------------------------------------------------------
    //clicking on Admin menu from sidebar
    await page.locator("li a[href*='viewAdminModule']").click();

    //clicking on add button
    await page.locator('div[class="orangehrm-header-container"] button').click();

    //clicking on User role dropdown
    await page.locator("div[class='oxd-select-wrapper']").first().click();
    // const dropdown = await page.locator("div[class='oxd-select-wrapper']").first();
    // await dropdown.click();

    //clicking on Admin from the User role dropdown
    await page.locator(".oxd-select-dropdown.--positon-bottom", { hasText: 'Admin' }).click();
    // const option = await page.locator(".oxd-select-dropdown.--positon-bottom", { hasText: 'Admin' });
    // await option.click();

    await page.pause();

    //Entering Employee Name
    await page.getByPlaceholder("Type for hints...").pressSequentially("Testing CCC");

    //selecting the name
    await page.locator("[class='oxd-autocomplete-dropdown --positon-bottom']", { hasText: 'Testing CCC' }).click();

    //clicking on status dropdown
    await page.locator("div[class='oxd-select-wrapper']").last().click();


    //clicking on Enabled from the status dropdown
    await page.locator(".oxd-select-dropdown.--positon-bottom", { hasText: 'Enabled' }).click()
    await page.pause();

    //Entering Username
    await page.locator(".oxd-input.oxd-input--active.oxd-input--error").fill("Admin1");

    //Entering password
    await page.locator('[type="password"]').fill("admin123");

    //Re entering password
    await page.locator('[type="password"]').fill("admin123");

    //clicking on save button
    await page.getByRole("button", { name: 'Save' }).click();

})

test("Nopcommerce Login Demo", async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://admin-demo.nopcommerce.com/login");
    // await page.pause();
    await page.locator('[class="cb-lb"] [type="checkbox"]').click();

})