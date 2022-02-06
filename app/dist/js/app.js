import { NegociacaoController } from './controllers/negociacao-controller.js';
const negociacao = new NegociacaoController();
const form = document.querySelector('.form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', event => {
    event.preventDefault();
    negociacao.adicionar();
});
const botaoImportar = document.querySelector('#botao-importar');
botaoImportar === null || botaoImportar === void 0 ? void 0 : botaoImportar.addEventListener('click', event => {
    event.preventDefault();
    negociacao.importarDados();
});
