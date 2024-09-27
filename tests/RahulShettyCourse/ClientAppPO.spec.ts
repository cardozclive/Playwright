import {test, expect} from '@playwright/test';
import { customTest } from './Utils_ts/test-base';
import { POManager } from "../PageObjects_TS/POManager";
//Json->string->js object
const dataset = JSON.parse(JSON.stringify(require('./Utils/placeorderTestData.json')));


for(const data of dataset)
    {
        
test(`@Web ClientAppPO App login for ${data.productName}`, async ({ page}) => {
    
    const poManager = new POManager(page, expect, data.username)

    //login
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    //Dashboard
    const dashboardPage = poManager.getDashboardPage(page, expect);
    await dashboardPage.searchProductAddCart(data.productName);
    await expect(page.locator("[routerlink*='cart']")).toHaveText(" Cart 1 ");
    await dashboardPage.navigateToCart();

    //Placing order
    const placeOrder = poManager.getPlaceOrder(page, expect, data.username);
    await placeOrder.AddDetailsPlaceOrder();

    // OrderHistory & Search
    const order = poManager.getOrderPage(page, expect)
    await order.orderConfirmationPage();
    await order.orderHistorySearch();

});

}

customTest('ClientAppPO App login', async ({ page, testDataForOrder}) => {
    const poManager = new POManager(page, expect, testDataForOrder.username)

    //login
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

    //Dashboard
    const dashboardPage = poManager.getDashboardPage(page, expect);
    await dashboardPage.searchProductAddCart(testDataForOrder.productName);
    await expect(page.locator("[routerlink*='cart']")).toHaveText(" Cart 1 ");
    await dashboardPage.navigateToCart();

    //Placing order
    const placeOrder = poManager.getPlaceOrder(page, expect, testDataForOrder.username);
    await placeOrder.AddDetailsPlaceOrder();
})