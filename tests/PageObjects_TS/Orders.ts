import { Page, Expect, Locator } from "@playwright/test";

let orderId;
export class Order
{
    page: Page;
    expect: Expect;
    confirmationText: Locator;
    orderIDText: Locator;
    myOrders: Locator;
    orderID: Locator

    constructor(page: Page, expect: Expect)
    {
        this.page = page;
        this.expect = expect;
        this.confirmationText = page.locator(".hero-primary");
        this.orderIDText = page.locator(".em-spacer-1 .ng-star-inserted");
        this.myOrders = page.locator("button[routerlink*='myorders']");
        this.orderID = page.locator(".col-text.-main");

    }
    async orderConfirmationPage()
    {
        await this.expect(this.confirmationText).toHaveText(" Thankyou for the order. ");
        orderId = await this.orderIDText.textContent();
        console.log(orderId);
        //click on Order button
        await this.myOrders.click();

    }

    async orderHistorySearch()
    {
        await this.page.locator("table").waitFor();
        const allOrders = this.page.locator("tbody tr");
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
        const orderIdDetails = await this.page.locator(".col-text.-main").textContent();
        console.log(orderIdDetails);
        this.expect(orderId.includes(orderIdDetails)).toBeTruthy();
        this.page.screenshot({ path: 'page.png', fullPage: true });

    }

}
module.exports = {Order}