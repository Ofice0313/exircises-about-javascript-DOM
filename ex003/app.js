/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */

let counter = 0;

document.querySelector('#btn_incremento').addEventListener('click', () => {
    counter++;
    document.querySelector('#valor').innerHTML = counter;
    if(counter === 0){
        document.querySelector('#valor').style.color = 'white';
    } else if(counter > 0){
        document.querySelector('#valor').style.color = 'green';
    }
});

document.querySelector('#btn_decremento').addEventListener('click', () => {
    counter--;
    document.querySelector('#valor').innerHTML = counter;
    if(counter === 0){
        document.querySelector('#valor').style.color = 'white';
    } else if(counter < 0){
        document.querySelector('#valor').style.color = 'red';
    }
});
