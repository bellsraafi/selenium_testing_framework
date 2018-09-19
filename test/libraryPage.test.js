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
        await page.visit('http://library-app.firebaseapp.com/libraries');
    });

    afterEach( async function (){
        await page.driver.sleep(2000);
        await page.quit();
        
    });

    it('Typing a valid email changes request button opacity to 1', async function() {
        
    });

    it('Typing a valid email enables request button', async function() {
        
    });

    it('Clicking request button trigger confirmation alert', async function() {
        
    });
});