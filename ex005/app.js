/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */

for(let i = 1; i <= 3; i++) {
    let el = document.querySelector('#range_' + i);
    el.setAttribute('min', 0);
    el.setAttribute('max', 100);
    el.value = 0;
    el.addEventListener('input', (e) => {
        document.querySelector('#value_' + i).innerHTML = e.target.value;
    });
}