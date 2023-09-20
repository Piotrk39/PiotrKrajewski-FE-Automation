import { expect, Page } from '@playwright/test';

export class NavigationBase {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectDropdownList(dropdown: string, value: string) {
    await this.page.waitForSelector(dropdown);
    await this.page.selectOption(dropdown, {label: value});
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

  async waitForPageLoad() {
    await this.page.waitForEvent("domcontentloaded");
    await this.page.waitForLoadState('networkidle');
  }

  async waitForTimeout(timeout: number) {
    await this.page.waitForTimeout(timeout);
  }

  async waitForElementDisplayed(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async clickUntilElementDisappears(locatorToClick: string, selectorToDisappear: string) {
    for (let i = 0; i < 10; i++) {
      await this.click(locatorToClick);
      await this.waitForTimeout(500);
      if (!(await this.page.isVisible(selectorToDisappear))) {
        break;
      }
    }
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