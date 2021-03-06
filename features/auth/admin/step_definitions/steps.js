// features/support/steps.js
const { Given, When, Then } = require('cucumber');
const path = require('path');
const { loadConfig, loadLogin } = require('../../../../app/util');
const { getDriver } = require('../../../../app/driver');

const { PageObject } = require('../../../../app/pageObject');

const config = loadConfig('config');
// Scenario setup

let pages = {
  authAdmin: new PageObject('auth-admin.json', path.join(__dirname, '/')),
  authInstructor: new PageObject('auth-instructor.json', path.join(__dirname, '/'))
};

Given(/^That I have opened the Achieve "(.*)"$/, async function (urlKey) {
  const url = config[urlKey];
  console.log(`Loading URL ${url}`);
  await getDriver().get(config.baseURL);
});

When(/^I have logged in as "(.*)"$/, function (adminUser) {
  console.log(`Using user ${config.adminUser}`);
});

When(/^I elect to manage the role of "(.*)"$/, function (username) {
  console.log(`Elected email: ${username}`);
});

When('I elect to manage the role of testuser+ad{int}@gmail.com', function (int) {
  console.log(`Elected int: ${int}`);
});

When(/^I grant the role of "(.*)"$/, function (role) {
  console.log(`Grant Role email: ${role}`);
});

Then('Verify Successful permission grant message', function () {

});

Then('I sign out of Achieve', function () {

});
