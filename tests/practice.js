class LoginPage {
    constructor(page){
        this.page = page;
        this.email = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signInButton = page.locator("[value='Login']");
    }
    
    async navigateToLoginPage(){
    await this.page.goto("https://rahulshettyacademy.com/client");
}

    async loginwithValidCredentials(email, password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
}
}

module.exports = { LoginPage };