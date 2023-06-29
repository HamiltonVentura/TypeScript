"use strict";
//Tipos e definicoes typescript =============================================================================
const x = 10;
console.log(x);
let exemplo;
exemplo = 34;
let exemplo2;
exemplo2 = "exemplo de String";
//Tupla elementos heterogeneos ====================================================================================
let tupla;
tupla = [12, "nome", ["sobrenome", "Clã"]];
let pok;
pok = ["niuthwo", "tipo Psiquico", 900];
console.log(pok);
//Tipos literais  =================================================================================================
let usuario = {
    nome: "Joao das neves",
    idade: 17,
    ativo: true
};
console.log(usuario);
// UNION TYPE =====================================================================================================
//quando arquivo retorna mais de um tipo
let id = "dez";
id = 45;
id = true;
console.log(id);
const USER = true;
//ENUNS  ========================================================================================================= 
var SIZE;
(function (SIZE) {
    SIZE["P"] = "Pequeno";
    SIZE["M"] = "Medio";
    SIZE["G"] = "Grande";
})(SIZE || (SIZE = {}));
const camisa = {
    name: "camisa Gola V",
    tamanho: SIZE.M
};
//TIPOS LITERAIS  =======================================================================================
let teste;
teste = null; //tem que ser identico 
//FUNÇÕES ===============================================================================================
function sum(a, b) {
    return a + b;
}
function concatena(nome, tratamento) {
    if (tratamento) {
        console.log(tratamento + ' ' + nome);
        return;
    }
    console.log('Bom dia' + nome);
}
concatena("hamilton", "senhor");
function soma(numeros) {
    return numeros.n1 + numeros.n2;
}
console.log(soma({ n1: 34, n2: 45 }));
//generics 
class user {
    constructor(nome, idade, prof) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = prof;
    }
    shownmae() {
        console.log(this.idade);
    }
}
const us = new user("hamilton", 13, "programador");
console.log(user.toString());
