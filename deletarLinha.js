// let clicksCount = 0;
// let linhaAnteriorClicada = null; 


// tableBody.addEventListener('click', function (event) {
//   const linhaClicada = event.target.closest('tr');

//   function excluirLinha(linha) {
//     tableBody.removeChild(linha);
//   }

//   if (linhaClicada && linhaClicada.classList.contains('cliente')) {
//     if (linhaClicada === linhaAnteriorClicada) { 
//       clicksCount++; 
//     } else {
//       clicksCount = 1; 
//     }

//     linhaAnteriorClicada = linhaClicada; 

//     if (clicksCount === 2) {
//       excluirLinha(linhaClicada);
//       clicksCount = 0;
//       linhaAnteriorClicada = null;
//     } else {
      
//       console.log("Clique novamente para excluir a linha.");
//     }
//   }
// });





var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
})