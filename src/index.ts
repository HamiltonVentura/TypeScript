
//Tipos e definicoes typescript =============================================================================
const x:number = 10;
    console.log(x);

let exemplo:number;
exemplo = 34;

let exemplo2:string;
exemplo2 = "exemplo de String"


//Tupla elementos heterogeneos ====================================================================================
let tupla: [number, string, string[]];
tupla = [12,"nome",["sobrenome","Clã"]];

let pok: [string, string, number];
pok = ["niuthwo","tipo Psiquico",900];
console.log (pok);

//Tipos literais  =================================================================================================
let usuario: {nome:string, idade:number,ativo:boolean} = {
   nome : "Joao das neves",
   idade: 17,
   ativo : true 
};

console.log(usuario);

// UNION TYPE =====================================================================================================
//quando arquivo retorna mais de um tipo
let id:string | number | boolean = "dez";
id = 45;
id = true;

console.log(id);

//pode se utiliar alias para definir varios tipos 

type meutipo = number | boolean | string;
const USER: meutipo = true;


//ENUNS  ========================================================================================================= 
enum SIZE{
        P = "Pequeno", 
        M = "Medio",
        G = "Grande"
}

const camisa = {
    name: "camisa Gola V",
    tamanho : SIZE.M
}


//TIPOS LITERAIS  =======================================================================================

let teste : "autenticado"| null;
teste = null; //tem que ser identico 


//FUNÇÕES ===============================================================================================

function sum(a:number,b:number):number{
    return a+b;
}

function concatena(nome:string, tratamento?:string): void{
    if(tratamento){
        console.log(tratamento+' '+nome);
        return 
    }
    console.log('Bom dia'+nome);
}

concatena("hamilton", "senhor");

//interfaces 

interface somaNumeros{
    n1:number,
    n2:number
}

function soma (numeros: somaNumeros){
    return numeros.n1 + numeros.n2;
}

console.log (soma({ n1 : 34, n2 : 45 }));

//generics 

class user {
    nome
    idade
    profissao

    constructor(nome: string, idade : number, prof: string){
        this.nome=nome;
        this.idade= idade;
        this.profissao = prof;
    }  

    shownmae(){
        console.log(this.idade)
    }
}

const us = new user("hamilton",13,"programador");
console.log(user.toString());