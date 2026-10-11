import {expect} from '@playwright/test';
const testData = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.countryInput = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.submitButton = page.locator(".action__submit");
    }

    async fillShippingInfo(data) {
        await this.countryInput.pressSequentially("ind", { delay: 150 });
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if (text === " India") {
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
 
        expect(this.page.locator(".user__name [type='text']").first()).toHaveText(data.username);
    }

    async submitOrder(){
        await this.submitButton.click();
    }
}


module.exports = { CheckoutPage };