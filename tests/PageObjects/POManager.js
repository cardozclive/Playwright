const{LoginPage} = require('../PageObjects/LoginPage')
const{DashboardPage} = require('../PageObjects/DashboardPage')
const{PlaceOrder} = require('../PageObjects/PlaceOrder')
const{Order} = require('../PageObjects/Orders')

class POManager
{
    constructor(page, expect, username)
    {
        this.page = page;
        
        // this.username = username;
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