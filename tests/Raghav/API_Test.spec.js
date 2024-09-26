import { test, expect } from '@playwright/test';

test("API Delete Request", async ({ request }) => {

    const response = await request.delete("https://reqres.in/api/users/2");
    expect(response.ok).toBeTruthy();
    expect(response.status()).toBe(204);    

})

test("API Patch Request", async ({ request }) => {

    const response = await request.patch("https://reqres.in/api/users/2", {

        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    })

    console.log(await response.json());
    expect(response.ok).toBeTruthy();
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('morpheus');
})


test("API Put Request", async ({ request }) => {

    const response = await request.put("https://reqres.in/api/users/2", {

        data: {
            "name": "morpheus",
            "job": "lion resident"
        }
    })

    console.log(await response.json());
    expect(response.ok).toBeTruthy();
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('morpheus');
})

test("API Post Request", async ({ request }) => {

    const response = await request.post("https://reqres.in/api/register", {

        data: {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    })

    console.log(await response.json());
    expect(response.ok).toBeTruthy();
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('4');
})


test("API Get Request", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2")
    const responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);
    expect(response.ok).toBeTruthy();
    const text = await response.text();
    expect(text).toContain('Janet');
})