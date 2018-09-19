const   Page    = require('./base_page'),
        {emailInput, requestInviteBtn, alertSuccess} = require('./utils/locators');


Page.prototype.requestBtn = async function () {
    await this.write(emailInput, this.fake_data().email);
    const button = await this.findEl(requestInviteBtn);
    return {
        opacity: await button.getCssValue('opacity'),
        state: await button.isEnabled()
    }
}

Page.prototype.clickSubmit = async function () {
    const button = await this.findEl(requestInviteBtn);
    return await button.click();
}

Page.prototype.alertSuccess = async function () {
    await this.requestBtn();
    await this.clickSubmit();
    const alertBox = await this.findEl(alertSuccess);
    return await alertBox.getText();
}

module.exports = Page;