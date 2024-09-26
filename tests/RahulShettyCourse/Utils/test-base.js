const base = require("@playwright/test");

exports.Customtest = base.test.extend({

    testDataForOrder: 
    {
        username: "sobo@yopmail.com",
        password: "$Password123",
        productName: "ADIDAS ORIGINAL"
    }
})
