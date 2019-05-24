import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToPageProduct() {
    return browser.get('http://localhost:4200/product');
  }

  navigateToPageListProduct() {
    return browser.get('http://localhost:4200/product-list');
  }

  /**
   * @description Esse método adiciona os valores de nome e valor do produto
   */
  getDataToField() {
    element(by.id('name')).clear();
    element(by.id('value')).clear();
    element(by.id('name')).sendKeys('Asus VivoBook X510UR-BQ292T Intel Core i7-7500U 2.7 GHz 8192 MB 1024 GB');
    element(by.id('value')).sendKeys(5.999);
  }

  /**
   * @description Método responsável por acionar o botão de cadastrar
   */
  clickSaveButton() {
    element(by.id('btn-cadastrar')).click();
  }

  /**
   * @description Esse método é responsável por acionar o click para direcionar para a tela de listar produtos
   */
  clickListButton() {
    element(by.id('btn-listar')).click();
  }

  /**
   * @description Esse método é responsável por acionar o botão do último elemento para edita-lo
   */
  clickEditButton() {
    element.all(by.id('btn-editar')).last().click();
  }

  /**
   * @description Esse método é responsável por acionar o botão do último elemento para edita-lo
   */
  clickDeleteButton() {
    element.all(by.id('btn-deletar')).last().click();
  }

  /**
   * @description Esse método adiciona o valor do último produto
   */
  changeValueData() {
    element.all(by.id('value')).last().sendKeys(3.555);
  }

  /**
   * @description Esse método adiciona o valor do último produto
   */
  clearValueData() {
    element.all(by.id('value')).last().clear();
  }
}
