import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  const waitTime = 5000;
  const waitTimeToViewValue = 2000;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Cadastrar um produto', () => {
    page.navigateToPageProduct();
    page.getDataToField();
    page.clickSaveButton();
    browser.wait(browser.getCurrentUrl(), waitTime).then(result => {
      browser.sleep(waitTimeToViewValue);
      expect(result).toEqual('http://localhost:4200/product-list');
    });
  });

  it('Direcionar para a tela de listagem de produtos, e verificar se o item foi adicionado', () => {
    const last = element.all(by.id('name')).last();
    browser.wait(browser.getCurrentUrl(), waitTime).then(() => {
      browser.sleep(waitTimeToViewValue);
      expect(last.getText()).toBe('Asus VivoBook X510UR-BQ292T Intel Core i7-7500U 2.7 GHz 8192 MB 1024 GB');
    });
  });

  it('Clickar no botão de editar e editar os dados do valor do notebook', () => {
    let last;
    page.clickEditButton();
    browser.wait(browser.getCurrentUrl(), waitTime).then(() => {
      browser.sleep(waitTimeToViewValue);
      page.clearValueData();
      page.changeValueData();
      browser.sleep(waitTimeToViewValue);
      page.clickSaveButton();
      browser.sleep(waitTimeToViewValue);
    }).then(() => {
      last = element.all(by.id('value')).last();
    }).then(() => {
      browser.sleep(waitTimeToViewValue);
      expect(last.getText()).toEqual('3.555');
    });
  });

  it('Deletar o dado inserido de forma automatizada', () => {
    page.clickDeleteButton();
    const last = element.all(by.id('name')).last();
    browser.sleep(waitTime);
    expect(last.getText()).not.toBe('Asus VivoBook X510UR-BQ292T Intel Core i7-7500U 2.7 GHz 8192 MB 1024 GB');
  });

});
