

function Somar(){
    // Obter os elementos e os valores digitados pelo usuário
    const verificaV1 = document.getElementById('valor01').value;
    const verificaV2 = document.getElementById('valor02').value;

    /* Comparação do Tipo e Valor (===), (==) Compara apenas valor
    && = E | || = OU                                            */

    if(verificaV1 === '' || verificaV2 === ''){

        alert("Valor 01 ou Valor 02 em branco, digite um número.");

    } else{
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';

        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
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


function Subtrair(){
    const valor1 = document.getElementById('valor01').value;
    const valor2 = document.getElementById('valor02').value;

    //Verifica se o campo está vazio, se estiver envia um alert
    if(valor1 === '' | valor2 === ''){
        alert("Valor 01 ou Valor02 em branco, digite um número.")
    } else{
        let v1 = parseFloat(document.getElementById('valor01').value)
        let v2 = parseFloat(document.getElementById('valor02').value)
        document.getElementById('resultado').style.display = 'flex';
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 

    `
    <h2>Memória de Cálculo<h2>
        <ul>
            <li>Operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
    `
}


function Limpar(){
    // Excluir o valor digitado nos Campos
    document.getElementeById('resultado').style.display = 'none';
    document.getElementById('valor01').value = '';
    document.getElementeById('valor02').value = '';

};