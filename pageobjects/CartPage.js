import {expect} from '@playwright/test';

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator("div li");
        this.checkoutButton = page.locator("text=Checkout");
    }
    
    async checkCartItems() {
        await this.cartItems.first().waitFor();
        const bool = await this.cartItems.first().isVisible();
        expect(bool).toBeTruthy();
    }

    async navigateToCheckout() {
        await this.checkoutButton.click();
}    
}


module.exports = { CartPage };