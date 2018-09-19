//require('geckodriver');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('').build();

driver.manage().window().maximize();
driver.manage().deleteAllCookies();

driver.get('http://www.google.com');

driver.quit();