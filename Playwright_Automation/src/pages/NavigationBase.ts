import { expect, Page } from '@playwright/test';

export class NavigationBase {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async type(locator: string, text: string) {
    await this.page.waitForSelector(locator);
    await this.page.type(locator, text);
    return text;
  }

  async click(locator: string) {
    await this.page.waitForSelector(locator);
    await this.page.click(locator);
  }

  async isElementPresent(locator: string) {
    return await this.page.isVisible(locator);
  }

  async getElementText(locator: string) {
    return await this.page.locator(locator).textContent();
  }

  async isElementPresentByText(locator: string, text: string) {
    const textContent = await this.getElementText(locator);
    const formattedTextContent = textContent.replace(/\n/g, '').replace(/\s+/g, ' ').trim();

    if(formattedTextContent === text) {
        console.log(`Elemnt with text ${text} was presnt`)
      }
      else {
        throw new Error(`No mathing element with text: ${text} instead element containing: ${formattedTextContent} was found`);
      }
}
}