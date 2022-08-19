console.log('Trabalhando com Condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
); //lista

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Compra realizada. \n")
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    //A pessoa é menor de idade e não está acompanhada 
    console.log("Não é maior de idade, nem está acompanhada. Logo não pode concluir a compra. \n");
}

console.log("Embarque:")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
} else{
    console.log("Embarque não permitido.")
}



console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

