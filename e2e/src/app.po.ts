import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/product');
  }

  getTitleText() {
    return element(by.css('[id="name"]')).sendKeys('Glub');
  }
}
