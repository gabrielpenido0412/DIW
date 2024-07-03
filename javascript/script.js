/*Declaramos uma variavel. Ela recebe o elemento associado com o button(vulgo id) por meio do 
metodo getElementById. O event listener é um escutador de evento. O  evento de click é associado com uma função.Quando o botão for clicado, ela é executada e faz que o hellow world apareça. Quando ela não é clicada, nada acontece.(OFDP DO ROMMEL MUDOU O SCRIPT.)*/
/* O código era esse ai
var elem = document.getElementById('btnHello');
elem.addEventListener('click', function () {
alert("Hello World!");
}, false);
*/
var elem=document.getElementById('btnHello');
elem.addEventListener('click',function(){
    var divTela= document.getElementById("tela");
    divTela.innerHTML = "Olá mundo";
},false);
