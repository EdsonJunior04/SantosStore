// Captura todas as encomendas
var clientes = document.querySelectorAll(".cliente");

for (var count = 0; count < clientes.length; count++) {

    // Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".qtde").textContent;

    // Captura o valor unitário da encomenda
    var unitarioElement = clientes[count].querySelector(".valorUnitario").textContent;


    if(validaQtde()){
        console.log(validaQtde());
        if(validaValorUnitario()) {
            clientes[count].querySelector(".valorTotal").textContent = calculaTotal(qtde,unitarioElement);
            clientes[count].querySelector(".valorUnitario").textContent = moedaFormata(unitarioElement);
        }
    }
    // validaTotal();
    // moedaUni();
}

function validaQtde() {
    if (qtde < 1 || isNaN(qtde)) {
        var codError = document.querySelectorAll(".cliente");
        clientes[count].querySelector(".qtde").textContent = "Qtde Invalida!";
        codError[count].querySelector(".qtde").style.color = "red";
    } else {
        return true;
    }
}

function validaValorUnitario() {
    if (unitarioElement < 1 || isNaN(unitarioElement)) {
        clientes[count].querySelector(".valorUnitario").textContent = "Valor Invalido!";
        clientes[count].style.backgroundColor = "red";
    } else {
        return true;
    }
}
/* 
function validaTotal() {
    if (qtde > 0 && unitarioElement > 0) {
        clientes[count].querySelector(".valorTotal").textContent = moeda();
        clientes[count].querySelector(".valorUnitario").textContent = unitarioElement.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
        clientes[count].querySelector(".valorTotal").textContent = "Verifique os valores!!!";
    }

} */

function calculaTotal(num1, num2) {
    //quantidade = parseFloat(qtde);
    //valorUnitario = parseFloat(unitarioElement);
    valorTotal = num1 * num2;
    //valor = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return moedaFormata(valorTotal);
}

/* function moeda() {
    quantidade = parseFloat(qtde);
    valorUnitario = parseFloat(unitarioElement);
    valorTotal = quantidade * valorUnitario;
    valor = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valor;
} */

/* function moedaUni() {
    valorUnitario = parseFloat(unitarioElement);
    valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorUnitario;
} */

function moedaFormata(valor) {

    var valorFormatado = parseFloat(valor);
    valorFormatado = valorFormatado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
}