function Somar() {
    let v1 = parseFloat(prompt('Digite o valor 01.'));
    let v2 = parseFloat(prompt('Digite o valor 02.'));
    document.getElementById('resultado').style.display = 'flex';


    // Obeter elemento | e fazer algo com ele (escrever um código HTML)
    // document.getElementById('resultado').innerHTML = 
    // `
    // <h2>Memória de Cálculo</h2>
    //     <ul>
    //         <li>Operação: SOMA </li>
    //         <li>Valor 01 digitado pelo usuário: ${v1} </li>
    //         <li>Valor 02 digitado pelo usuário: ${v2} </li>       
    //         <li>O resultado da operação é ${v1} + ${v2} = ${v1 + v2}</li>
    //     </ul>
    // `;  



    const resultado = document.getElementById('resultado');
    console.log(resultado);
    resultado.innerHTML = 
    `
    <h2>Memória de Cálculo</h2>
        <ul>
            <li>Operação: SOMA </li>
            <li>Valor 01 digitado pelo usuário: ${v1} </li>
            <li>Valor 02 digitado pelo usuário: ${v2} </li>       
            <li>O resultado da operação é ${v1} + ${v2} = ${v1 + v2}</li>
        </ul>
    `;   
};


function Limpar() {
    document.getElementById('resultado').style.display = 'none';
};