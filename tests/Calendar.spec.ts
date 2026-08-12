// const {test, expect} = require('@playwright/test');

// test('Calendar handling', async ({page}) => {
//     await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//     const month = "8";
//     const date = "25";
//     const year = "2028";
//     const expectedList = [month, date, year];
//     await page.locator(".react-date-picker").click();
//     await page.locator(".react-calendar__navigation__label").click();
//     await page.locator(".react-calendar__navigation__label").click();
//     await page.getByText(year).click();
//     await page.locator(".react-calendar__tile").nth(Number(month)-1).click();
//     await page.locator("//abbr[text()='"+date+"']").click();
//     const inputs = page.locator(".react-date-picker__inputGroup__input");
//     for (let i=0; i<expectedList.length; i++)
//     {
//         const actualList = await inputs.nth(i).inputValue();
//         await expect(actualList).toEqual(expectedList[i]);
//         break;
//     }
// });