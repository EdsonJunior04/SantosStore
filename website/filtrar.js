var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

    var valorFiltro = this.value.trim();

    if (valorFiltro.length === 0) {
        exibirTodosClientes();
    } else {
        filtrarClientes(valorFiltro);
    }
});

function exibirTodosClientes() {
    var clientes = document.querySelectorAll(".cliente");

    for (var cli = 0; cli < clientes.length; cli++) {
        clientes[cli].classList.remove("invisivel");
    }
}


function filtrarClientes(valorFiltro) {
    var clientes = document.querySelectorAll(".cliente");

    for (var cli = 0; cli < clientes.length; cli++) {
        var nome = clientes[cli].querySelector(".nome").textContent;
        var expressao = new RegExp(valorFiltro, "i");

        if (!expressao.test(nome)) {
            clientes[cli].classList.add("invisivel");
        } else {
            clientes[cli].classList.remove("invisivel");
        }
    }
}
