const {webdriver, Builder, By, until} = require('selenium-webdriver'),
        fake_data = require('./utils/fake_data');

const Page = function () {
    this.driver = new Builder()
                    .forBrowser('chrome')
                    //.withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o)
                    .usingServer('http://172.17.0.1:4444/wd/hub')
                    .build();

    this.fake_data = fake_data;                
    let driver = this.driver;

    this.visit = async function(url) {
        return await driver.get(url);
    }

    this.quit = async function() {
        return await driver.quit();
    }

    this.findEl = async function(el) {
        await driver.wait(until.elementLocated(By.css(el)), 5000);
        return await driver.findElement(By.css(el));
    }

    this.findElAll = async function(el) {
        await driver.wait(until.elementLocated(By.css(el)), 5000);
        return await driver.findElements(By.css(el));
    }

    this.write = async function(el, txt) {
        const inputField = await this.findEl(el);
        return await inputField.sendKeys(txt);
    }
}

module.exports = Page;