import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public adicionar(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public listar(): ReadonlyArray<Negociacao> {
    return this.negociacoes;

    /*
    Outra forma de declarar como readonly seria: 

     listar(): readonly Negociacao[] {
      return this.negociacoes;
    }
  */
  }
}
