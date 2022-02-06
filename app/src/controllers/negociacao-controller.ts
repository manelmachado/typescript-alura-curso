import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
import { imprimir } from '../utils/imprimir.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;

  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;

  @domInjector('#valor')
  private inputValor: HTMLInputElement;

  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');
  private negociacoesService = new NegociacoesService();

  constructor() {
    // this.inputData = document.querySelector('#data') as HTMLInputElement;
    // this.inputQuantidade = document.querySelector(
    //   '#quantidade'
    // ) as HTMLInputElement;
    // this.inputValor = document.querySelector('#valor') as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }
  @inspect
  @logarTempoDeExecucao(true)
  public adicionar(): void {
    const negociacao = Negociacao.criaNegociacao(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.diaUtil(negociacao.data)) {
      this.mensagemView.update('Apenas dias úteis são aceitos');
      return;
    }
    this.negociacoes.adicionar(negociacao);
    imprimir(negociacao, this.negociacoes);
    this.clearForm();
    this.atualizaView();
  }

  public importarDados(): void {
    this.negociacoesService
      .obterNegociacoes()
      .then(negociacoesDeHoje => {
        return negociacoesDeHoje.filter(negociacaoDeHoje => {
          return !this.negociacoes
            .listar()
            .some(negociacao => negociacao.ehIgual(negociacaoDeHoje));
        });
      })
      .then(negociacoesData => {
        for (let negociacao of negociacoesData) {
          this.negociacoes.adicionar(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      });
  }

  private diaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  private clearForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!');
  }
}
