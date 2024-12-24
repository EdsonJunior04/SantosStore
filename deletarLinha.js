var tabela = document.querySelector("table");

// A função para remover a encomenda da lista de encomendas
function removerEncomendaDaLista(nomeEncomenda) {
    const index = encomendasAdicionadas.indexOf(nomeEncomenda);
    if (index !== -1) {
        encomendasAdicionadas.splice(index, 1); // Remove o nome da encomenda da lista
    }
}

tabela.addEventListener("dblclick", function(event){
    const linha = event.target.parentNode;
    
    // Verifica se a linha existe e tem a classe 'cliente'
    if (linha && linha.classList.contains("cliente")) {
        // Pega o nome da encomenda na linha
        const nomeEncomenda = linha.querySelector(".nome").textContent;

        // Remove a encomenda da lista de encomendas adicionadas
        removerEncomendaDaLista(nomeEncomenda);
        
        // Aplica a animação de fadeOut e remove a linha após 500ms
        linha.classList.add("fadeOut");
        
        setTimeout(function(){
            linha.remove();
        }, 500);
    }
});
