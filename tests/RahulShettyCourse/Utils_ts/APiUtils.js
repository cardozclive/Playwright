class APiUtils {
    constructor(apiContext, loginPayload) {
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayload
            })
        // expect(loginResponse.ok()).toBeTruthy(); //not needed here as this is just a precondition data setup and not actual test
        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }

    async createOrder(OrderPayload) {
        let response = {};
        response.token = await this.getToken();
        //CreateOrderAPI
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: OrderPayload,
                headers: {
                    'Authorization': response.token,
                    'Content-type': 'application/json'
                }
            })
        const orderResponseJson = await orderResponse.json();
        // expect(orderResponse.status()).toBe(201); //not needed here as this is just a precondition data setup and not actual test
        console.log(orderResponseJson);
        const orderID = orderResponseJson.orders[0];
        response.orderID = orderID;
        return response;
    }
}
module.exports = { APiUtils };