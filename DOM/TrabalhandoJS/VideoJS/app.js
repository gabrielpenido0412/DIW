// let cidades = [
    //esse é o conjunto de objetos dentro dessa array. É o nosso JSON
//     { "id": 1, "nomes": "Belo Horizonte", "estado": "MG", "populacao": 3800000 },
//     { "id": 2, "nomes": "São Paulo", "estado": "SP", "populacao": 11800000 },
//     { "id": 3, "nomes": "Rio de Janeiro", "estado": "RJ", "populacao": 5300000 },
//     { "id": 4, "nomes": "Curitiba", "estado": "PR", "populacao": 1200000 },
//     { "id": 5, "nomes": "Fortaleza", "estado": "CE", "populacao": 2100000 }
// ]

const urlCidades = 'https://jsonserver-cidades--rommelpuc.repl.co/cidades'
let cidades = []

function carregaDadosJSONServer (func) {
    fetch(urlCidades)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            cidades = dados
            console.log ('Dados carregados!')
            func ()
        })
}
