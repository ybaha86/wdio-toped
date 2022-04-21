
describe('Searching with defined keyword', () => {
    it('Searching Selenium Webdriver', async () => {
        const inputSearch = $('//input[@placeholder = "Cari apa saja"]')
        const btnSubmitSearch = await $('//button[@type="submit"]');
        await browser.url('https://www.udemy.com/');
        await inputSearch.setValue('Selenium Webdriver');
        console.log(await inputSearch.getValue());;
        await btnSubmitSearch.click();
        console.log("test");

    });
});