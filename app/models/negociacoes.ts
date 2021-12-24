import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{ //READONLY CRIA UM ARRAY SÓ DE LEITURA 
        return this.negociacoes;
    }
    
    /*
    lista(): Array<Negociacao>{          ARRAY USANDO SPREAD PARA COLOCAR ITENS DENTRO DO ARRAY
        return [...this.negociacoes];
    } 
    */
}
