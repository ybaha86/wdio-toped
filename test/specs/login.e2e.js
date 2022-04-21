const { login } = require('../pageobjects/login.page');
const loginPage = require('../pageobjects/login.page');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Login', () => {
    it('Login using not valid credential', async () => {
        let elem = await $('//div[@id="error-alert"]');
        await LoginPage.open();
        let checkElement = await loginPage.checkElement();
        if (checkElement){
            await LoginPage.login('yunusqa.2021@gmail.com', 'P@ssw0rdPrm123xx');
            if (checkElement) {
                console.log(checkElement);
                console.log("Login Failed");
            }
        }
    });
});

describe('Login', () => {
    it('Login using not valid credential', async () => {
        await LoginPage.open();
        let varCheckElement = await loginPage.checkElement();
        if (varCheckElement){
            await LoginPage.login('yunusqa.2021@gmail.com', 'P@ssw0rdPrm123');
        }
    });
});



