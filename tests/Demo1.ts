import {expect, type Locator, type Page} from '@playwright/test'

let message1: string = "Hello";
message1 = "bye";

let age1: number = 20;

let isActive: boolean = false;

let numbers1: number[] = [1, 2, 3, 4, 5]

let data: any = "this could be anything";
data = 42;
data = [1, 2, 3, 4, 5]

console.log('Typescript test message: ' + message1 + ' & age: ' + age1);

function add(a: number, b: number): number {
    return a + b;
}
add(3, 5);

let person : { name: string, age: number, location : String } = { name: "Bob", age: 35, location: "delhi" };
person.location = "Mumbai"



class LoginPage
{
    page : Page;
    signInbutton : Locator;
    userName : Locator;
    password : Locator;

    constructor(page:any)
    {
        this.page = page;
        this.signInbutton= page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username, password)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }

    
}
module.exports = {LoginPage};