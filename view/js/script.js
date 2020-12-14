import form from './form.js';
import list from './list.js';

window.addEventListener('load', () => {
  console.log('JS ativo ');
  new form().createPage();

  let btnForm = document.querySelector('#formBtnRedirect');
  //let btnList = document.querySelector('#listBtnRedirect');

  btnForm.addEventListener('click', () => {
    new list().createPage();
  });

  /*
  btnList.addEventListener('click', () => {
    new form().createPage();
  });
  */
});
