import form from './form.js';

export default class App {
  constructor() {
    console.log('JS ativo ');
    new form().createPage();
  }
}
new App();
