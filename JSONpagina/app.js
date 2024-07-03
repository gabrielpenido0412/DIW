var cadastro = [{
    "nome": "Gabriel Penido",
    "cidade": "Belo Horizonte",
    "idade": 18,
    "veiculos": [{
        "marca": "Fiat",
        "modelo": "UNO",
        "ano": "2020",
        "placa": "HMV-1001"
    }]
}, {
    "nome": "Penido Gabriel",
    "cidade": "Vitoria",
    "idade": 25
}, {
    "nome": "Gabriel Penido Viglioni",
    "cidade": "Belo Horizonte",
    "idade": 25,
    "veiculos": [{
        "marca": "Ford",
        "modelo": "Territory",
        "ano": 2024,
        "placa": "XYZ-1234"
    }, {
        "marca": "Toyota",
        "modelo": "Etios",
        "ano": 2013,
        "placa": "ABC-3456"
    }]
}];
function Exibircadastro(){
    //é como se declarassemos o textohtml como zero
    var textohtml='';
    //vai repetir pra exibir cada um dos 3 cadastros
    for(let i=0;i<cadastro.length;i++){
        //Pega o nome da pessoa em cada posição.
        textohtml+=`Pessoa:${cadastro[i].nome} <br> `;

        if(cadastro[i].veiculos.length>0){
            textohtml+='<ul>';
        }
        for(let j=0;j<cadastro[i].veiculos.length;j++){
            let marca= cadastro[i].veiculos[j].marca;
            let modelo= cadastro[i].veiculos[j].modelo;
            let ano= cadastro[i].veiculos[j].ano;
            let placa= cadastro[i].veiculos[j].placa;
            textohtml+=`<li> ${marca} - ${modelo} - ${ano} - ${placa}</li>`;
        }
        if(cadastro[i].veiculos.length>0){
            textohtml+='</ul>';
        }
    }; 
   //assim aparece na tela os elementos com id tela. Ou seka, o que tá na div que colocamos com id tela.
   var tela= document.getElementById('tela' );
   tela.innerHTML =textohtml;
}