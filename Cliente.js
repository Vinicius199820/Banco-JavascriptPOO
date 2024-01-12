export class Cliente{
    nome;
    _cpf;

    get cpf(){
       return this._cpf;
    }

    //Construtor passa o parametro para o objeto e vocÊ poderá criar os clientes, cpf, etc diretamente a função "const cliente1 = new Cliente(parametros do construtor)"
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
};