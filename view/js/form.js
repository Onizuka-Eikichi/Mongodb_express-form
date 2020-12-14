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
    btnList.className = 'formBtn-list';
    btnList.id = 'formBtnRedirect';
    btnList.type = 'button';
    btnList.textContent = 'Lista';
    container.appendChild(btnList);

    let form = document.createElement('form');
    form.action = '/register';
    form.method = 'POST';

    let name = document.createElement('input');
    name.type = 'text';
    name.placeholder = 'Nome';
    name.className = 'formInput';
    form.appendChild(name);

    let adress = document.createElement('input');
    adress.type = 'text';
    adress.placeholder = 'Endereço';
    adress.className = 'formInput';
    form.appendChild(adress);

    let contact = document.createElement('input');
    contact.type = 'text';
    contact.placeholder = 'Contato';
    contact.className = 'formInput';
    form.appendChild(contact);

    let cnpj = document.createElement('input');
    cnpj.type = 'text';
    cnpj.placeholder = 'Cnpj';
    cnpj.className = 'formInput';
    form.appendChild(cnpj);

    let btnSubmit = document.createElement('button');
    btnSubmit.className = 'formBtn-list';
    btnSubmit.id = 'formBtnSubmit';
    btnSubmit.type = 'button';
    btnSubmit.textContent = 'Cadastrar';
    form.appendChild(btnSubmit);

    container.appendChild(form);
  };
}
