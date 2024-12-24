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


function calculaTotal(num1, num2) {

    valorTotal = num1 * num2;
   
    return moedaFormata(valorTotal);
}


function moedaFormata(valor) {

    var valorFormatado = parseFloat(valor);
    valorFormatado = valorFormatado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
}

function format(val){
    var valor = val.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

    return valor;
}