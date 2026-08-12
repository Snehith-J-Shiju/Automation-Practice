// import { test, expect } from '@playwright/test';

// test('Playwright rewrite with getBy', async ({page}) => {
//     await page.goto("https://rahulshettyacademy.com/angularpractice/");
//     console.log(await page.title());
//     await page.locator("[name='name']").first().fill("Snehith Shiju");
//     await page.locator("[name='email']").fill("snehith@gmail.com");
//     await page.getByPlaceholder("Password").fill("Password");
//     await page.getByLabel("Check me out if you Love IceCreams!").check();
//     await page.getByLabel("Gender").selectOption("Male");
//     await page.getByLabel("Student").check();
//     await page.getByRole("button", {name: "Submit"}).click();
//     await page.getByText(" The Form has been submitted successfully!.").isVisible();   
//     await page.getByRole("link", {name: "Shop"}).click();
//     console.log(await page.title());
//     // const products = page.locator(".card.h-100");
//     // const count = await products.count();
//     // for (let i=0; i<count; ++i)
//     // {
//     //     if(await products.nth(i).locator("h4 a").textContent() === "Blackberry")
//     //     {
//     //         await products.nth(i).locator("button").click();
//     //         break;
//     //     }
//     // }
//     await page.locator("app-card").filter({hasText: "Blackberry"}).getByRole("button").click();
//     // await page.getByRole("button", {name: "Checkout", exact: false}).click();
//     console.log(await page.title());

// })