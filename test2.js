
const {webdriver, Builder, By, until} = require('selenium-webdriver'),
        chrome = require('selenium-webdriver/chrome'),
        assert = require('assert');
//const {describe, it, before, after} = require('selenium-webdriver/testing');
//--reporter mochawesome --reporter-options autoOpen=true
let driver,
op = new chrome.Options();
op.addArguments('disable-infobars');


describe('Library app scenarios', function () {
    this.timeout(30000);
    beforeEach(async function () {
        driver = new Builder()
                .forBrowser('chrome')
                //.withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o)
                .usingServer('http://172.17.0.1:4444/wd/hub')
                .build();

        await driver.get('http://library-app.firebaseapp.com');
    });

    afterEach(async function () {
        await driver.quit();
    });

    it('Changes button opacity upon inputing correct email', async function () {
        let button  = await driver.findElement(By.css('.btn-lg'));
        await driver.findElement(By.css('input')).sendKeys('user@email.com');
        return button.getCssValue('opacity').then(function (result) {
            assert.equal(parseInt(result), 1);
        });
    });

    it('Alert success box was present', async function () {
        let button  = await driver.findElement(By.css('.btn-lg'));
        await driver.findElement(By.css('input')).sendKeys('user@email.com');
        await button.click();
        await driver.wait(until.elementLocated(By.css('.alert-success')), 2500);
        await driver.findElements(By.css('.alert-success')).then(result=> {
            assert.equal(result.length, 1, `${result.length} alert-success box were found.`);
        });
    });

    it('Shows navbar links', async function () {
        await driver.findElements(By.css('nav')).then(result=> {
            assert.equal(result.length, 1);
        });
    });
});