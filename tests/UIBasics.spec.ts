import type { Browser, Page } from '@playwright/test';
import { test, expect } from '@playwright/test';

test('Sample test0', async ({ browser }: { browser: Browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});

test('Sample test1', async ({ page }: { page: Page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());
  await (expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy'));
  const username = page.locator('#username');
  await username.fill('rahulshettyacademy');
  const password = page.locator('.form-control').nth(1);
  await password.fill('Learning@830$3mK2');
  const loginType = page.locator('.radiotextsty').first();
  await loginType.click();
  const userType = page.locator('[data-style="btn-info"]');
  await userType.selectOption("consult");
  const terms = page.locator('[name="terms"]');
  await terms.check();
  await (expect(terms).toBeChecked());
  const signIn = page.locator('[value="Sign In"]');
  await signIn.click();
//   const errorMessage = console.log (await page.locator('[style*="block"]').textContent());
//   await expect(page.locator('[style*="block"]')).toContainText('Empty username/password.');
//   await username.clear();
//   await username.fill('rahulshettyacademy');
//   await signIn.click();
//   await page.waitForLoadState('networkidle');
const cardTitles = page.locator('.card-body a');
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
console.log(await cardTitles.allTextContents());
});

test('UI Controls', async ({ page }: { page: Page }) => {
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const username = page.locator('#username');
await username.fill('rahulshettyacademy');
const password = page.locator('.form-control').nth(1);
await password.fill('Learning@830$3mK2');
const loginType = page.locator('.radiotextsty').last();
await loginType.click();
await expect(loginType).toBeChecked();
console.log(await loginType.isChecked());
const Okpopup = page.locator('#okayBtn');
await Okpopup.click();
const userType = page.locator('[data-style="btn-info"]');
await userType.selectOption("consult");
const terms = page.locator('[name="terms"]');
await terms.check();
await (expect(terms).toBeChecked());
await terms.uncheck();
expect(await page.locator('[name="terms"]').isChecked()).toBeFalsy();
const docLink = page.locator("[href*='documents-request']");
await expect(docLink).toHaveAttribute("class", "blinkingText");
await docLink.click();
// await page.pause();
// const loginType = page.locator('.radiotextsty').first();
// await loginType.click();
})

test.only ('Child Windows Handling', async ({ browser }: { browser: Browser }) => {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
// const username = page.locator('#username');
const docLink = page.locator("[href*='documents-request']");

const [newPage] = await Promise.all([
context.waitForEvent('page'), 
docLink.click(),
]);

await newPage.locator('.red').waitFor();
const text = await newPage.locator('.red').textContent();
console.log(text);
const arrayText =  text.split("@");
const domain = arrayText[1].split(" ")[0];
// console.log(domain);
await page.pause();

await page.locator('#username').fill(domain);
console.log(await page.locator('#username').inputValue());


});