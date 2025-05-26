import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/v1/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async getErrorMessage(): Promise<string> {
    return this.page.locator('[data-test="error"]').innerText();
  }

  async isInventoryVisible(): Promise<boolean> {
    return this.page.url().includes('/inventory.html');
  }
}