

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@id="email--1"]');
    }

    get inputPassword () {
        return $('//input[@id="id_password"]');
    }

    get btnSubmit () {
        return $('//input[@id="submit-id-submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async checkElement () {
        let elemUsername = await $('//input[@id="email--1"]');
        let elemPassword = await $('//input[@id="id_password"]');
        let elemBtnSubmit = await $('//input[@id="submit-id-submit"]');
        if (elemUsername.isExisting() && elemPassword.isExisting() && elemBtnSubmit.isExisting()) {
            return true;
        }
    }
    async checkErrorMessage () {
        let elemMessage = await $('//div[@id="error-alert"]');
        if (elemMessage.isExisting()){
            return true;
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        //return super.open('join/login-popup/');
        return super.open('join/login-popup/');
    }

    openPage(){
        return super.open();
    }

}

module.exports = new LoginPage();
