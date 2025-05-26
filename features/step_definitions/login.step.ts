import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../../pages/LoginPage';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('I navigate to the login page', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When(
  'I login with username {string} and password {string}',
  async (username, password) => {
    await loginPage.login(username, password);
  }
);

Then('I should be redirected to the inventory page', async () => {
  expect(await loginPage.isInventoryVisible()).toBeTruthy();
  await browser.close();
});

Then('I should see an error message', async () => {
  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Username and password do not match');
  await browser.close();
});