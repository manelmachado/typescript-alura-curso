import { Modelo } from '../interfaces/modelo.js';

export class Negociacao implements Modelo<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  public static criaNegociacao(
    _data: string,
    _quantidade: string,
    _valor: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(_data.replace(exp, ','));
    const quantidade = parseInt(_quantidade);
    const valor = parseFloat(_valor);
    return new Negociacao(date, quantidade, valor);
  }

  get volume() {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
