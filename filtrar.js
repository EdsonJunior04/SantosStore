var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

    if (this.value.length > 0) {
        var clientes = document.querySelectorAll(".cliente");

        for (var cli = 0; cli < clientes.length; cli++) {
            var nome = clientes[cli].querySelector(".nome").textContent;

            var expressao = new RegExp(this.value, "i")

            //Varifica os clientes conform criterio de busca
            //if (nome != this.value) {
                if(!expressao.test(nome)){
                clientes[cli].classList.add("invisivel");
            } else {
                clientes[cli].classList.remove("invisivel");
            }
        }

    } else {
        for (var cli = 0; cli < clientes.length; cli++) {
            var nome = clientes[cli].querySelector(".nome").textContent;

            clientes[cli].classList.remove("invisivel")
        }
    }});