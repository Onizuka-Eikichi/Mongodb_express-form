import list from './list.js';
export default class form {
  constructor() {}

  createPage = () => {
    let content = document.querySelector('.content');

    content.innerHTML = '';

    let container = document.createElement('div');
    container.className = 'container';

    content.appendChild(container);

    container = document.querySelector('.container');

    let btnList = document.createElement('button');
    btnList.className = 'formBtn-list btn btn-secondary';
    btnList.id = 'formBtnRedirect';
    btnList.type = 'button';
    btnList.textContent = 'Lista';
    btnList.addEventListener('click', () => {
      new list().createPage();
    });
    container.appendChild(btnList);

    let h2 = document.createElement('h2');
    h2.textContent = 'Cadastrar Cliente';
    container.appendChild(h2);

    let form = document.createElement('form');
    form.action = '/register';
    form.method = 'POST';

    let divFormName = document.createElement('div');
    divFormName.className = 'mb-3';

    let divFormAdress = document.createElement('div');
    divFormAdress.className = 'mb-3';

    let divFormContact = document.createElement('div');
    divFormContact.className = 'mb-3';

    let divFormCnpj = document.createElement('div');
    divFormCnpj.className = 'mb-3';

    let name = document.createElement('input');
    name.type = 'text';
    name.placeholder = 'Nome';
    name.className = 'formInput';
    name.name = 'name';
    divFormName.appendChild(name);
    form.appendChild(divFormName);

    let adress = document.createElement('input');
    adress.type = 'text';
    adress.placeholder = 'Endereço';
    adress.className = 'formInput';
    adress.name = 'adress';
    divFormAdress.appendChild(adress);
    form.appendChild(divFormAdress);

    let contact = document.createElement('input');
    contact.type = 'text';
    contact.placeholder = 'Contato';
    contact.className = 'formInput';
    contact.name = 'contact';
    divFormContact.appendChild(contact);
    form.appendChild(divFormContact);

    let cnpj = document.createElement('input');
    cnpj.type = 'text';
    cnpj.placeholder = 'Cnpj';
    cnpj.className = 'formInput';
    cnpj.name = 'cnpj';
    divFormCnpj.appendChild(cnpj);
    form.appendChild(divFormCnpj);

    let btnSubmit = document.createElement('button');
    btnSubmit.className = 'formBtn-list btn btn-secondary';
    btnSubmit.id = 'formBtnSubmit';
    btnSubmit.type = 'submit';
    btnSubmit.textContent = 'Cadastrar';
    form.appendChild(btnSubmit);

    container.appendChild(form);
  };
}
