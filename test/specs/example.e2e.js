const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


describe('Login with Valid Credetial', () => {
    it('Login to Udemy', async () => {
        await LoginPage.open();
        await LoginPage.login('yunusqa.2021@gmail.com', 'P@ssw0rdPrm123');
    });
});

describe('Searching with defined keyword', () => {
    it('Searching Selenium Webdriver', async () => {
        const inputSearch = $('//input[@placeholder = "Cari apa saja"]')
        const btnSubmitSearch = await $('//button[@type="submit"]');
        await browser.url('https://www.udemy.com/');
        await inputSearch.setValue('Selenium Webdriver');
        console.log(await inputSearch.getValue());;
        await btnSubmitSearch.click();


    });
});

