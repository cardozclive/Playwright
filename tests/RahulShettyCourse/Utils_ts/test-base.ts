import {test as baseTest} from '@playwright/test';

interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
};

export const customTest = baseTest.extend<{testDataForOrder: TestDataForOrder}>({

    testDataForOrder: 
    {
        username: "sobo@yopmail.com",
        password: "$Password123",
        productName: "ADIDAS ORIGINAL"
    }
})
