import { Page, Locator, Expect } from "@playwright/test";
export class DashboardPage
{
    page : Page
    products : Locator;
    productsText : Locator;
    cart : Locator;
    expect : Expect

    constructor(page : Page, expect: Expect)
    {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.expect = expect;
    }

    async searchProductAddCart(productName: string)
    {
        await this.products.last().waitFor();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 }); // 60 seconds
        // const products = page.locator(".card-body");
        const Titles = await this.productsText.allTextContents();
        console.log(Titles);
        // await page.waitForLoadState("networkidle");
        const count = await this.products.count();

        for(let i=0;i<count; i++)
        {
            if (await this.products.nth(i).locator("b").textContent() === productName)
            {
                //add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
        await this.expect(this.cart).toHaveText(" Cart 1 ");

    }

    async navigateToCart()
    {
        
        await this.cart.click();
    }

}
module.exports = {DashboardPage}