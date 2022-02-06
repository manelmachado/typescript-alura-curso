import { NegociacaoDoDia } from '../interfaces/negociacao-do-dia';
import { Negociacao } from '../models/negociacao.js';

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then(result => {
        return result.json();
      })
      .then((data: NegociacaoDoDia[]) => {
        return data.map(dado => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      });
  }
}
