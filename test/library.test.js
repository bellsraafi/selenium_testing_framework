const   assert              = require('assert'),
        chai                = require('chai'),
        chaiAsPromised      = require('chai-as-promised'),
        Page                = require('../lib/home_page');

let should = chai.should(),
    page;

chai.use(chaiAsPromised);

describe('Library app scenarios', function () {
    this.timeout(30000);
    beforeEach( async function () {
        page = new Page();
        await page.visit('http://library-app.firebaseapp.com');
    });

    afterEach( async function (){
        await page.driver.sleep(2000);
        await page.quit();
        
    });

    it('Typing a valid email changes request button opacity to 1', async function() {
        const btn = await page.requestBtn();
        btn.opacity.should.equal('1');
    });

    it('Typing a valid email enables request button', async function() {
        const btn = await page.requestBtn();
        btn.state.should.be.true;
    });

    it('Clicking request button trigger confirmation alert', async function() {
        const alertBox = await page.alertSuccess();
        alertBox.should.contain('Thank you! We saved your email address with the following id');
    });
});