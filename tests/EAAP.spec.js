const { test, expect } = require('@playwright/test')

test('EA App testing', async ({ browser }, ) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    //Openning the webpage
    await page.goto('http://eaapp.somee.com/');
    //const currentUrl = page.url();

    //login in with the correct credentials
    await page.locator('#loginLink').click();
    await page.locator('#UserName').fill('admin');
    await page.locator('[type="password"]').fill('password');
    await page.getByLabel('Remember me').click();
    await page.getByRole('button', { name: 'log in' }).click();

    //Clicked in Employee list link in the header
    await page.locator('a[href="/Employee"]').click();

    //Clicked on Create New link
    await page.getByRole('link', { name: 'Create New' }).click();

    //Adding the Employee data
    await page.locator('#Name').fill('Raju');
    await page.locator('#Name').press('Tab');
    await page.getByLabel('Salary').fill('1000');
    await page.getByLabel('DurationWorked').fill('5');
    const dropdown = await page.locator('[id="Grade"]');
    dropdown.selectOption('Senior');
    await page.getByLabel('Email').pressSequentially('yo@yopmail.com');
    await page.getByRole('button', {name : 'Create'}).click();
    
    //Iterating through the list of employees & printing the names in console. Also searching through the list of employees
    //and printing a message in console User is present if the record is found
    const empList = await page.locator('div.container.body-content:nth-child(2) table.table:nth-child(2) tbody:nth-child(1) tr td:nth-child(1)');
    const empCount = await empList.count();
    await console.log(empCount);

    for(let i = 0; i<empCount; i++){
        const textContent = await empList.nth(i).innerText();
        console.log(textContent);
        if(textContent === 'Ramesh') 
        {
            console.log('User is present');
            break;
        }
    }
/*
    // Add the URL to the page using JavaScript before taking a screenshot
    await page.evaluate((url) => {
        const urlOverlay = document.createElement('div');
        urlOverlay.style.position = 'fixed';
        urlOverlay.style.top = '0';
        urlOverlay.style.left = '0';
        urlOverlay.style.backgroundColor = 'white';
        urlOverlay.style.padding = '10px';
        urlOverlay.style.zIndex = '10000';
        urlOverlay.innerText = `URL: ${url}`;
        document.body.appendChild(urlOverlay);
    }, currentUrl);

    // Below code is written to take SS with name of the test. In this case the name of the test is "EA App Testing"
    await page.screenshot({path: `Screenshot/${testinfo.title}.png`, fullPage: true});
*/

    
}
)

