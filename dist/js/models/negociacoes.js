export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
        /*
        Outra forma de declarar como readonly seria:
    
         listar(): readonly Negociacao[] {
          return this.negociacoes;
        }
      */
    }
}
