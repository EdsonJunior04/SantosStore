const tableBody = document.querySelector('tbody');
const addButton = document.querySelector('#btnCadastro');
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
  nome.classList.add("nome")
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

function addEncomenda(novaEncomenda){

  var tabela = document.querySelector("#tabela");

  tabela.appendChild(montaTR(novaEncomenda));
}

function montaTD(dado, classe = "") {

  var td = document.createElement("td");
  td.textContent = dado;

  if (classe){
    td.classList.add(classe)
  }

  return td;
}

function montaTR(novaEncomenda, classeTr = "cliente"){

  var tr = document.createElement("tr");
  tr.classList.add(classeTr)

  tr.appendChild(montaTD(novaEncomenda.nome, "nome"));
  tr.appendChild(montaTD(novaEncomenda.produto, "produto"));
  tr.appendChild(montaTD(novaEncomenda.qtde, "qtde"));
  tr.appendChild(montaTD(format(parseFloat(novaEncomenda.unitario)), "valorUnitario"));
  tr.appendChild(montaTD(calculaTotal(novaEncomenda.qtde, novaEncomenda.unitario), "valorTotal"));

  return tr;
}

addButton.addEventListener('click', addNovaLinha);