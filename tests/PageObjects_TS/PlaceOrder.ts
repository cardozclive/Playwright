import { Page, Expect, Locator } from "@playwright/test";
export class PlaceOrder
{
    expect: Expect;
    page: Page;
    cartPage: Locator;
    addedproduct: Locator;
    checkout: Locator;
    cardNumber: Locator;
    cardExpiry: Locator;
    cvvName: Locator;
    country: Locator;
    options: Locator;
    optionsCount: Locator;
    applyCoupon: Locator;
    emailValidation: Locator;
    PlaceOrder: Locator

    constructor(page: Page, expect: Expect)
    {
        this.expect = expect;
        this.page = page;
        this.cartPage = page.locator("div li")
        this.addedproduct = page.locator("h3:has-text('ADIDAS ORIGINAL')")
        this.checkout = page.locator("button[type='button']");
        this.cardNumber = page.locator("[value = '4542 9931 9292 2293']");
        this.cardExpiry = page.locator("select.input.ddl");
        this.cvvName = page.locator(".input.txt");
        this.country = page.locator("[placeholder*='Country']");
        this.options = page.locator(".ta-results");
        this.optionsCount = this.options.locator("button");
        this.applyCoupon = page.locator("[type='submit']");
        this.emailValidation = page.locator(".user__name.mt-5 [type='text']");
        this.PlaceOrder = page.locator(".btnn.action__submit");
    }

    async AddDetailsPlaceOrder(username: string)
    {
        await this.cartPage.first().waitFor();
        const bool = await this.addedproduct.isVisible(); //This locator is called Pseudo class
        // this.expect(bool).toBeTruthy();
        await this.checkout.last().click();
        // I can also use await page.locator("text=Checkout").click() but it is not recommended to use text much in the text 
        // as there are chances that the text of some elements may get changed in the future
        await this.cardNumber.clear();
        await this.cardNumber.fill("1234 5678 9874 5632");
        const dropdown = await this.cardExpiry.first();
        dropdown.selectOption("08");
        const dropdown2 = await this.cardExpiry.last();
        dropdown2.selectOption("29");
        
        //Multiple ways to write the code
        // await page.locator("[class='input txt']").first().fill("123");
        // await page.locator("(//input[@type='text'])[2]").fill("789");
        await this.cvvName.nth(1).fill("321")
    
        await this.cvvName.nth(2).fill("Rahul Shetty");
       
        await this.country.pressSequentially("IND",{delay:100});
        const options = this.options;
        await options.waitFor();
        const optionsCount = await this.optionsCount.count();
    
        for(let i=0;i<optionsCount; i++){
    
           const text = await options.locator("button").nth(i).textContent()
            if(text === " India"){
    
                options.locator("button").nth(i).click();
                break;
            }
        }
        await this.cvvName.nth(3).fill("rahulshettyacademy");
        await this.applyCoupon.click();
        // this.expect(await this.page.locator(".user__name.mt-5 [type='text']").first()).toHaveText(username);
        await this.PlaceOrder.click();
        
    }
}
module.exports = {PlaceOrder}