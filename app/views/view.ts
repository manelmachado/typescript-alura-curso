export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  public update(msg: T): void {
    this.elemento.innerHTML = this.template(msg);
  }

  protected abstract template(msg: T): string;
}
