var botaoBuscar = document.querySelector("#buscar-encomendas");

botaoBuscar.addEventListener("click", function(){
    console.log("cheguei")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var encomendas = JSON.parse(resposta);

        encomendas.forEach(function(cada_encomenda){
            addEncomenda(cada_encomenda);
        });


    })
    xhr.send();
})