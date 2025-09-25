/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */

let valor = 0;
document.querySelector('#btn_incremento').addEventListener('click', () => {
    valor++;
    document.querySelector('#valor').innerHTML = valor;
});

document.querySelector('#btn_decremento').addEventListener('click', () => {
    if(valor <= 0) return;
    document.querySelector('#valor').innerHTML = --valor;
});


