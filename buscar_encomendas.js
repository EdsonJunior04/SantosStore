let encomendasAdicionadas = []; // Para controlar quais encomendas já foram exibidas
let mensagemExibida = false; // Variável para controlar se a mensagem já foi exibida
let mensagemSucessoExibida = false; // Para controlar se a mensagem de sucesso foi exibida

var botaoBuscar = document.querySelector("#buscar-encomendas");
var mensagemNenhumaEncomenda = document.querySelector("#mensagemNenhumaEncomenda");
var mensagemSucesso = document.querySelector("#mensagemSucesso");

botaoBuscar.addEventListener("click", function() {
    console.log("Chegou no clique do botão");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas");
    
    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        var encomendas = JSON.parse(resposta);

        // Se todas as encomendas já foram adicionadas
        if (encomendasAdicionadas.length === encomendas.length) {
            console.log("Todas as encomendas já foram adicionadas!");

            // Exibe a mensagem de "nenhuma encomenda" apenas se ainda não foi exibida
            if (!mensagemExibida) {
                mensagemNenhumaEncomenda.style.display = "block"; // Exibe a mensagem
                mensagemExibida = true; // Marca como exibida

                // Define para esconder a mensagem após 5 segundos
                setTimeout(function() {
                    mensagemNenhumaEncomenda.style.display = "none";
                    mensagemExibida = false; // Resetando a variável para permitir nova exibição
                }, 5000); // 5 segundos
            }

            return; // Não faz mais nada se já tiver exibido todas as encomendas
        }

        // Filtra as encomendas que ainda não foram adicionadas
        var encomendasNaoAdicionadas = encomendas.filter(function(encomenda) {
            return !encomendasAdicionadas.includes(encomenda.nome); // Verifica pelo nome
        });

        // Adiciona as encomendas que ainda não estão na tabela
        if (encomendasNaoAdicionadas.length > 0) {
            encomendasNaoAdicionadas.forEach(function(cada_encomenda) {
                addEncomenda(cada_encomenda);
                encomendasAdicionadas.push(cada_encomenda.nome); // Marca como adicionada
            });

            // Exibe a mensagem de sucesso quando novas encomendas forem adicionadas
            if (!mensagemSucessoExibida) {
                mensagemSucesso.style.display = "block"; // Exibe a mensagem de sucesso
                mensagemSucessoExibida = true;

                // Define para esconder a mensagem após 5 segundos
                setTimeout(function() {
                    mensagemSucesso.style.display = "none";
                    mensagemSucessoExibida = false; // Resetando a variável para permitir nova exibição
                }, 5000); // 5 segundos
            }
        }

        // Se todas as encomendas foram adicionadas e nenhuma nova, mostra a mensagem de "nenhuma encomenda"
        if (encomendasNaoAdicionadas.length === 0 && !mensagemExibida) {
            mensagemNenhumaEncomenda.style.display = "block"; // Exibe a mensagem
            mensagemExibida = true;

            setTimeout(function() {
                mensagemNenhumaEncomenda.style.display = "none"; // Esconde após 5 segundos
                mensagemExibida = false;
            }, 5000); // 5 segundos
        }
    });

    xhr.send();
});

// Função para adicionar a encomenda na tabela
function addEncomenda(novaEncomenda) {
    var tabela = document.querySelector("#tabela tbody");

    // Monta a linha com a encomenda e adiciona na tabela
    var novaLinha = montaTR(novaEncomenda);
    tabela.appendChild(novaLinha);
}

// Função para montar a célula (TD)
function montaTD(dado, classe = "") {
    var td = document.createElement("td");
    td.textContent = dado;

    if (classe) {
        td.classList.add(classe);
    }

    return td;
}

// Função para montar a linha (TR)
function montaTR(novaEncomenda, classeTr = "cliente") {
    var tr = document.createElement("tr");
    tr.classList.add(classeTr);

    tr.appendChild(montaTD(novaEncomenda.nome, "nome"));
    tr.appendChild(montaTD(novaEncomenda.produto, "produto"));
    tr.appendChild(montaTD(novaEncomenda.qtde, "qtde"));
    tr.appendChild(montaTD(format(parseFloat(novaEncomenda.unitario)), "valorUnitario"));
    tr.appendChild(montaTD(calculaTotal(novaEncomenda.qtde, novaEncomenda.unitario), "valorTotal"));

    return tr;
}

// Função para formatar o preço (caso precise)
function format(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para calcular o total (caso precise)
function calculaTotal(qtde, valorUnitario) {
    return (qtde * valorUnitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
