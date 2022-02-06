import { Negociacao } from '../models/negociacao.js';
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados')
            .then(result => {
            return result.json();
        })
            .then((data) => {
            return data.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
