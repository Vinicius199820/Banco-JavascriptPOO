//Criando um sistema de banco
//representação do cliente na classe
//objeto/instancia é o cliente1, ao inves de variavel, chama atributo dentro da classe, molde é a class
import {Cliente} from "./cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Vinicius", 11122233309);
const cliente2 = new Cliente("Gabriela", 88822233309);
const cliente3 = new Cliente("Henrique", 48335565880);

//Conta corrente
const conta1 = new ContaCorrente(cliente1,101);
conta1.depositar(500)

const conta2 = new ContaCorrente(cliente2,102);

const conta3 = new ContaCorrente(cliente3, 103);
conta3.depositar(10)


//conta1 transfere 200 reais desta conta para a conta2
conta1.transferir(200, conta2)

console.log(conta3);

conta2.transferir(50, conta3);
console.log(conta3);
console.log(conta2);

console.log(`Este é seu novo salvo, henrique: R$${conta2._saldo}`)
