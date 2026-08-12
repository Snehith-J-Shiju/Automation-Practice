// import type { Browser, Page } from '@playwright/test';
// const { test, expect } = require('@playwright/test');

// test.only('Assignment 1', async ({ page }: { page: Page }) => {
//     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
//     const username = page.getByPlaceholder('email@example.com');
//     const email = 'snehithshiju@gmail.com';
//     await username.fill(email);
//     const password = page.getByPlaceholder('enter your passsword');
//     await password.fill('Password');
//     const loginBtn = page.getByRole('button', { name: 'Login', exact: true });
//     await loginBtn.click();

//     // await page.waitForLoadState('networkidle');
//     await page.locator('.card-body').first().waitFor();
//     await page.locator('.card-body').filter({ hasText: 'ADIDAS ORIGINAL' }).getByRole('button', {name: "Add to Cart"}).click();
//     await page.getByRole('listitem').getByRole('button', { name: 'Cart'}).click();  
//     await page.locator("div ul").first().waitFor();
//     await page.getByText("iphone 13 pro").isVisible();
//     const checkoutBtn = page.getByRole('button', { name: 'Checkout'});
//     await checkoutBtn.click();
//     // await page.getByPlaceholder('4542 9931 9292 2293').fill("1234 5678 9012 3456");
//     // const monthSelect = page.locator(".ddl").first();
//     // await monthSelect.selectOption("08");
//     // const daySelect = page.locator(".ddl").nth(1);
//     // await daySelect.selectOption("25");

//     // const cvvInput = page.locator("input[type='text']").nth(1);
//     // await cvvInput.fill("123");
//     // const nameonCardInput = page.locator("input[type='text']").nth(2);
//     // await nameonCardInput.fill("Snehith Shiju");
//     // const applyCouponInput = page.locator("input[type='text']").nth(3);
//     // await applyCouponInput.fill("RSA2026");
//     // const applyCoupon = page.locator("[type='submit']");
//     // await applyCoupon.click();
//     // const emailCheck = page.locator(".input.txt.text-validated.ng-pristine.ng-valid.ng-touched");
//     // await expect(emailCheck).toHaveValue(email);
//     await page.getByPlaceholder('Select Country').pressSequentially('Ind');
//     await page.locator(".ta-results").first().waitFor();
//     await page.getByRole('button', { name: 'India' }).nth(1).click();
//     await page.getByText('PLACE ORDER').click();
//     await page.locator('h1:has-text=" Thankyou for the order. "');

//     const orderIdText = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
//     const orderId = await orderIdText.split("|")[1];
//     console.log(orderId);
//     const orders = page.locator("button[routerlink*='myorders']");
//     await orders.click();
//     await page.locator("tbody tr").first().waitFor();
//     await page.locator("tbody tr").filter({hasText: orderId}).getByRole('button').first().click();

//     // const table = page.locator("tbody");
//     // await table.waitFor();
//     // const rows = page.locator(" tbody tr");
//     // for (let i=0; i< await rows.count(); ++i)
//     // {
//     //     const orderText = await rows.nth(i).locator("th").textContent();
//     //     if(orderId.includes(orderText))
//     //     {
//     //         await rows.nth(i).locator("button").first().click();
//     //         break;
//     //     }

//     // }
//     const orderIdDetails = await page.locator(".col-text").textContent();
//     expect(orderId.includes(orderIdDetails)).toBeTruthy();
    

// });