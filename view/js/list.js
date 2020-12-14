export default class list {
  constructor() {}

  createPage = () => {
    let content = document.querySelector('.content');

    content.innerHTML = '';

    let container = document.createElement('div');
    container.className = 'container';

    content.appendChild(container);

    container = document.querySelector('.container');

    let btnList = document.createElement('button');
    btnList.className = 'listBtn-form';
    btnList.id = 'listBtnRedirect';
    btnList.type = 'button';
    btnList.textContent = 'Form';
    container.appendChild(btnList);

    let dateInicio = document.createElement('input');
    dateInicio.type = 'date';
    dateInicio.className = 'dataInput';
    container.appendChild(dateInicio);

    let dateFim = document.createElement('input');
    dateFim.type = 'date';
    dateFim.className = 'dataInput';
    container.appendChild(dateFim);

    let divExibirLista = document.createElement('div');
    divExibirLista.className = 'lista';
    container.appendChild(divExibirLista);
  };
}
