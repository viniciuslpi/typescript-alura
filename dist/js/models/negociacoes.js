export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        /*
        lista(): Array<Negociacao>{          ARRAY USANDO SPREAD PARA COLOCAR ITENS DENTRO DO ARRAY
            return [...this.negociacoes];
        }
        */
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
