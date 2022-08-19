console.log("Trabalhando com Atribuição de Variáveis");

const idade = 37;
let nome = "Jairo"; //se mudar o 'const nome' pra 'let nome', lá na frente poderá sobescrever a variável, senão dará erro..
const sobrenome = "Torres";

console.log(nome + sobrenome);
console.log(nome,sobrenome);
// mesma coisa se usar assim: console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`); // Esse ${variável} é uma interpolação de variáveis, com strings (textos)

nome = nome + sobrenome; //const = constante, logo a variável é uma constante. Por isso DÁ ERRO aqui, pois não pode sobescrever
                         // Se alterar o 'const' pra 'let', flexibiliza a variável para que possa ser subescrita.


                         // o IDEAL é que variáveis sejam constantes; que evitemos flexibilizar

//const nomeCompleto = nome + sobrenome, seria o ideal (ou seja, criar outra variável) 

