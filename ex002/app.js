/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */

let counter = 0;

document.querySelector('#btn_incremento').addEventListener('click', () => {
    if(counter === 10) return;
    document.querySelector('#valor').innerHTML = ++counter;
});

document.querySelector('#btn_decremento').addEventListener('click', () => {
    if(counter === -10) return;
    document.querySelector('#valor').innerHTML = --counter;
});

