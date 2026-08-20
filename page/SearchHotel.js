class SearchHotel {
    constructor(page) {
        this.page = page
        this.location = page.locator('//select[@id="location"]')
    }
    async selectLocation() {
        await this.location.selectOption({ index: 1 })
    }
}