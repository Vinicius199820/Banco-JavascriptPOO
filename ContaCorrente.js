import {Cliente} from "./cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo;
    _saldo = 0;

    //Este instanceof garante que o objeto precise ser um novo cliente, não qualquer numero
    set cliente (novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    };

    get cliente(){
        return this.cliente
    };

    get saldo(){
        return this._saldo;
    }

    constructor(cliente,agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }


    //adicionamos uma função sacar na conta corre,te onde if essa conta corrente tiver o saldo maior, realize a operação
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    //Se o valor do depositar for maior do que zero, adicione o saldo do cliente += valor
    depositar(valor){
        if(valor <= 0)
        {
            return;
        }
        this._saldo+= valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}