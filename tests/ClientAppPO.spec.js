const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const { custmomtest } = require('../utils/test-base');
const testData = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));

for (const data of testData) 
{
test(`Client App login - ${data.username} with product ${data.productName}`, async ({ page }) => 
   {
   //js file- Login js, DashboardPage, CartPage, CheckoutPage   
   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(data.username, data.password);
   
   const dashboardpage = poManager.getDashboardPage();
   await dashboardpage.searchProductAddCart(data.productName);
   await dashboardpage.navigatetoCart();
   
   const cartPage = poManager.getCartPage();
   await cartPage.checkCartItems();
   await cartPage.navigateToCheckout();
   
   const checkoutPage = poManager.getCheckoutPage();
   await checkoutPage.fillShippingInfo(data);
   await checkoutPage.submitOrder();


   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});

}

custmomtest("Client App login", async ({ page, testDataforOrder }) =>
   {
   //js file- Login js, DashboardPage, CartPage, CheckoutPage   
   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(testDataforOrder.username, testDataforOrder.password);
   
   const dashboardpage = poManager.getDashboardPage();
   await dashboardpage.searchProductAddCart(testDataforOrder.productName);
   await dashboardpage.navigatetoCart();
   
   const cartPage = poManager.getCartPage();
   await cartPage.checkCartItems();
   await cartPage.navigateToCheckout(); 
});