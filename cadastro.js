const tableBody = document.querySelector('tbody');
const addButton = document.querySelector('button');
const errorMessageElement = document.createElement('p'); // Crie um elemento para exibir a mensagem de erro

function addNovaLinha() {

  event.preventDefault();

  const name = document.getElementById('nome_input').value.trim();
  const product = document.getElementById('produto_select').value;
  const quantity = document.getElementById('qtde_input').value.trim();
  const unitPrice = document.getElementById('valorUnitario_input').value.trim();

  // Verifique se algum campo está vazio
  if (!name || !product || !quantity || !unitPrice) {
    errorMessageElement.textContent = "Por favor, preencha todos os campos!";
    document.querySelector('.message_error').appendChild(errorMessageElement); // Adicione a mensagem abaixo do formulário
    return; // Impede que a função continue se houver um campo vazio
  }

  // Remova a mensagem de erro caso exista
  if (errorMessageElement.parentNode) {
    errorMessageElement.parentNode.removeChild(errorMessageElement);
  }

  const novaLinha = document.createElement('tr');
  novaLinha.classList.add('cliente');

  const nome = document.createElement('td');
  nome.textContent = name;
  novaLinha.appendChild(nome);

  const produto = document.createElement('td');
  produto.textContent = product;
  novaLinha.appendChild(produto);

  const qtde = document.createElement('td');
  qtde.textContent = quantity;
  novaLinha.appendChild(qtde);

  const valorUni = document.createElement('td');
  valorUni.textContent = parseFloat(unitPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  novaLinha.appendChild(valorUni);

  const totalPrice = quantity * parseFloat(unitPrice);
  const totalPriceCell = document.createElement('td');
  totalPriceCell.textContent = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  novaLinha.appendChild(totalPriceCell);

  tableBody.appendChild(novaLinha);

  document.getElementById('nome_input').value = '';
  document.getElementById('qtde_input').value = '';
  document.getElementById('valorUnitario_input').value = '';
  document.getElementById('produto_select').value = '';
}

addButton.addEventListener('click', addNovaLinha);