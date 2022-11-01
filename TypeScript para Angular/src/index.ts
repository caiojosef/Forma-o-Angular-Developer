/* variáveis */
//tipos primitivos: boolean, number, string

let ligado:boolean = false;
let nome:string = "Caio";
let idade:number = 29;
let altura:number = 1.80;

//tipos especiais: null, undefined;
let nulo:null = null;
let indefinido:undefined = undefined;

//tipos abrangentes: any, void

let retorno:void;
let qualquer:any = false;


//objeto - sem previsibilidade
let produto:object = {
   name:"caio",
   cidade: "sp",
   idade: 29,
};

type produtoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};
 let meuProduto: produtoLoja = {
  nome: "Tenis",
  preco: 250.00,
  unidades: 10,
 };

 // arrays

 let dados: string[] = ["caio", "josef", "held", "asam"];
 let dados2: Array<string> = ["caio", "josef", "held", "asam"];

 let infos: (string | number)[] = ["caio", "123456"];

//tuplas

let boleto:[string, number, number] = ["caio josef", 190.90, 20003909];

// datas
let aniversario:Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());

//funções
function addNumber(x: number,y: number): number{
return x+y;
}

function addToHello(name:string){
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string{
  return phone;
}

async function getDatabase(id: number): Promise<number | string>{
  return "caiojosef";
}

let soma: number = addNumber (4,7);

console.log(addToHello("Caio"));
console.log(callToPhone(12314124124));

//interfaces (type x interfaces)

type robot = {
  name: string;
  id: number | string;
};

interface robot2 {
  id:number;
  name: string;
}

const bot: robot2 = { 
  id: 1,
  name: "megaman",

}