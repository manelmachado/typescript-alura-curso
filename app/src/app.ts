import { NegociacaoController } from './controllers/negociacao-controller.js';
const negociacao = new NegociacaoController();

const form = document.querySelector('.form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  negociacao.adicionar();
});
const botaoImportar = document.querySelector('#botao-importar');
botaoImportar?.addEventListener('click', event => {
  event.preventDefault();
  negociacao.importarDados();
});