const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');


function somar(){
    /* Converte os valores digitados para números  */
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {

        /* Exibe a área de resultado */
        resultado.style.display = 'flex';

        /* Exibe a memória de cálculo
        Template de strings com crase e não aspas */
        resultado.innerHTML = `
        <h2>Memória de Cálculo<h2>
            <ul>
                <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
            </ul>
        `;
    };
};
    

function subtrair(){

};

function multiplicar(){

};

function dividir(){

};

function porcentagem(){

};

function calcPagVista(){

};

function calcPagPrazo(){

};

function limpar(){
    /* Oculta a área de resultado sem removê-la do DOM */
    resultado.style.display = 'none'

    /* Limpa o valor digitado no primeiro input */
    input01.value = '';

    /* Limpa o valor digitado no segundo input */
    input02.value = '';

    input01.focus();
};

