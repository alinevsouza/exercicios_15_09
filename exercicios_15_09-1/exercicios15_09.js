import PromptSync from "prompt-sync"
const prompt = PromptSync()

function valMaior(a,b,c){
    if(a > b && a > c){
        console.log(`O maior valor é ${a}`)
    } else{
        if(b > a && b > c ){
            console.log(`O maior valor é ${b}`)
        } else{
            console.log(`O maior valor é ${c}`)
        }
    }
}

valMaior(5,15,22)

// Exs 2:

function tabuada(){

    let val = Number(prompt('Digite um número '))
    let limt = Number(prompt('Digite um limite '))
    for(let i = 1; i <= limt; i++){
        console.log(`${val} X ${i} = ${val * i}`)
    }
}

tabuada()

// Ex 3:

function maiorVal(lista) {
    let maior = lista[0];

    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > maior) {
        maior = lista[i];
      }
    }

    return maior;
  }

  function menorVal(lista) {
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }

    return menor;
  }

  // Dados:

  const tamanho = Number(prompt('Digite quantos números quer colocar na lista:'))
  const lista = []

for (let i = 0; i < tamanho; i++) {
    const numero = Number(prompt(`Digite o número ${i + 1}:`));
    lista.push(numero);
}

const maior = maiorVal(lista);
const menor = menorVal(lista);

console.log('Lista de números:', lista);
console.log('Maior valor:', maior);
console.log('Menor valor:', menor);


// Ex 4:

// Nome

let Nome = prompt('Digite um nome ou pressione Enter para sair')

while(Nome != ''){
    Nome = prompt('Digite um nome ou pressione Enter para sair')
}
console.log(Nome)

// Hobby

const listaHobby = []
let Hobby = prompt('Digite um hobby ou pressione Enter para sair')

while(Hobby != ''){
    listaHobby.push(Hobby)
    Hobby = prompt('Digite um hobby ou pressione Enter para sair')
}

const hobsArrumad = listaHobby.join(', ')
console.log('Nome: ${Nome} | Hobbies: ${hobsArrumad}')