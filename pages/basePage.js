class BasePage {
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://www.bcbsnc.com';
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async getTitle() {
        return await this.page.title();
    }


    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = BasePage;