export default class list {
  constructor() {}

  createPage = () => {
    let content = document.querySelector('.content');

    content.innerHTML = '';

    let container = document.createElement('div');
    container.className = 'container-list';

    content.appendChild(container);

    container = document.querySelector('.container-list');

    let btnList = document.createElement('button');
    btnList.className = 'listBtn-form btn btn-secondary';
    btnList.id = 'listBtnRedirect';
    btnList.type = 'button';
    btnList.textContent = 'Form';
    btnList.addEventListener('click', () => {
      window.location.reload(true);
    });
    container.appendChild(btnList);

    let dateInicio = document.createElement('input');
    dateInicio.type = 'date';
    dateInicio.className = 'dataInput';
    dateInicio.id = 'btnStart';
    dateInicio.name = 'startDate';
    container.appendChild(dateInicio);

    let btnDateStart = document.getElementById('btnStart');

    let dateFim = document.createElement('input');
    dateFim.type = 'date';
    dateFim.className = 'dataInput';
    dateFim.id = 'btnEnd';
    dateFim.name = 'endDate';
    container.appendChild(dateFim);

    let btnDateEnd = document.getElementById('btnEnd');

    let divExibirLista = document.createElement('div');
    divExibirLista.className = 'lista row justify-content-center';
    divExibirLista.id = 'customer';

    let customer = document.getElementById('customer');
    container.appendChild(divExibirLista);

    //Events

    btnDateStart.addEventListener('change', (event) => {
      const inicio = event.target.previousElementSibling.value;
      const fim = event.target.value;

      fetchData(inicio, fim);
    });

    btnDateEnd.addEventListener('change', (event) => {
      const inicio = event.target.previousElementSibling.value;
      const fim = event.target.value;

      fetchData(inicio, fim);
    });
  };
}

const fetchData = async (dataInicio, dataFim) => {
  try {
    let clientes = [];
    let html = '';

    const data = await fetch('http://localhost:3000/data');
    const json = await data.json();

    clientes = json.map((cliente) => {
      let date = cliente.date.split('T');
      let onlyDate = date[0];

      return {
        name: cliente.name,
        adress: cliente.adress,
        contact: cliente.contact,
        cnpj: cliente.cnpj,
        date: onlyDate,
      };
    });

    clientes.forEach((element) => {
      if (dataInicio <= element.date && element.date <= dataFim) {
        html += `
        <div class="CustomerData col-6 col-sm-3">
             
        <p> <label>Nome: ${element.name}</label></p>
        <p> <label>Rua: ${element.adress}</label></p>
        <p> <label>Contato: ${element.contact}</label></p>
        <p> <label>Cnpj: ${element.cnpj}</label></p>
            
        </div>
      `;
      }
    });
    customer.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};
