class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsTitle = page.locator(".card-body b");
        this.cartButton = page.locator("[routerlink*='cart']");
    }

    async searchProductAddCart(productName) {
        await this.productsTitle.first().waitFor();
        const titles = await this.productsTitle.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }

        
    }

    async navigatetoCart(){
        await this.cartButton.click();
    }
}
module.exports = { DashboardPage };