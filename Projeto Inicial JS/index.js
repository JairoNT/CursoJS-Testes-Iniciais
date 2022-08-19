class Cliente{
    nome;
    cpf;
}

class Contacorrente{
    agencia;
    _saldo = 0;  //#saldo =0   https://github.com/tc39/proposal-class-fields#private-fields

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            }
    }

    depositar(valor){
        if(valor >0){
            this._saldo += valor;
        }
    }
}


  const Cliente1 = new Cliente();
  Cliente1.nome = "Ricardo";
  Cliente1.cpf = 11122233309;
  Cliente1.agencia = 1001;
  Cliente1.saldo = 0;
  
  const Cliente2 = new Cliente();
  Cliente2.nome = "Aline";
  Cliente2.cpf = 88822233309;
  Cliente2.agencia = 1001;
  Cliente2.saldo = 0; 


const contaCorrenteRicardo = new Contacorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);





