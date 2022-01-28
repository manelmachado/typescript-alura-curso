export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(msg) {
        this.elemento.innerHTML = this.template(msg);
    }
}
