const {test, expect } = require("@playwright/test");
const allure = require('allure-playwright');


test("Practice2", async({browser})=> 
{
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 1920, height: 1080 },
        }
    });
    const email = "sobo@yopmail.com";
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("$Password123");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    page.locator(".card-body").last().waitFor();
    await page.waitForLoadState('networkidle', { timeout: 60000 }); // 60 seconds
    const products = page.locator(".card-body");
    const Titles = await page.locator(".card-body b").allTextContents();
    console.log(Titles);
    // await page.waitForLoadState("networkidle");
    const count =await products.count();
    const productWanted = "ADIDAS ORIGINAL";

    for(let i=0;i<count; i++)
    {
        if (await products.nth(i).locator("b").textContent() === productWanted)
        {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    
    await expect(page.locator("[routerlink*='cart']")).toHaveText(" Cart 1 ");
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible(); //This locator is called Pseudo class
    expect(bool).toBeTruthy();
    await page.locator("button[type='button']").last().click();
    // I can also use await page.locator("text=Checkout").click() but it is not recommended to use text much in the text 
    // as there are chances that the text of some elements may get changed in the future
    await page.locator("[value = '4542 9931 9292 2293']").clear();
    await page.locator("[value = '4542 9931 9292 2293']").fill("1234 5678 9874 5632");
    const dropdown = await page.locator("select.input.ddl").first();
    dropdown.selectOption("08");
    const dropdown2 = await page.locator("select.input.ddl").last();
    dropdown2.selectOption("29");
    
    //Multiple ways to write the code
    // await page.locator("[class='input txt']").first().fill("123");
    // await page.locator("(//input[@type='text'])[2]").fill("789");
    await page.locator(".input.txt").nth(1).fill("321")

    await page.locator(".input.txt").nth(2).fill("Rahul Shetty");
   
    await page.locator("[placeholder*='Country']").pressSequentially("IND",{delay:100});
    const options = page.locator(".ta-results");
    await options.waitFor();
    const optionsCount = await options.locator("button").count();

    for(let i=0;i<optionsCount; i++){

       const text = await options.locator("button").nth(i).textContent()
        if(text === " India"){

            options.locator("button").nth(i).click();
            break;
        }
    }

    await page.locator(".input.txt").nth(3).fill("rahulshettyacademy");
    await page.locator("[type='submit']").click();
    // page.waitForLoadState("domcontentloaded");
    await expect(page.locator(".user__name.mt-5 [type='text']").first()).toHaveText(email);
    // expect(page.locator(".user__name.mt-5 .user__name.mt-5 .ng-pristine")).toHaveValue(email);
    await page.locator(".btnn.action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    //click on Order button
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("table").waitFor();
    const allOrders = page.locator("tbody tr");
    const orderHistory = await allOrders.count();
    // await page.pause();
    for(let i=0; i<orderHistory; i++)
    {
        const OrderIDMatch = await allOrders.nth(i).locator("[scope='row']").textContent();

        if(orderId.includes(OrderIDMatch)){
            await allOrders.nth(i).locator("text=View").click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text.-main").textContent();
    console.log(orderIdDetails);
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
    await context.close();
});