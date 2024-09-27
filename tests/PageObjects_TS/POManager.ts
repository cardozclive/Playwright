import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { PlaceOrder } from "./PlaceOrder";
import { Order } from "./Orders";
import {Expect, Page} from '@playwright/test'

export class POManager
{
    loginPage : LoginPage;
    dashboardPage : DashboardPage;
    placeOrder : PlaceOrder;
    order : Order;
    page : Page;
    expect: Expect;


    constructor(page:Page, expect:Expect, username: string)
    {
        
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page,expect);
        this.placeOrder = new PlaceOrder(this.page,expect,username);
        this.order = new Order(this.page,expect);

    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }

    getPlaceOrder()
    {
        return this.placeOrder;
    }

    getOrderPage()
    {
        return this.order;
    }
}
module.exports = {POManager}