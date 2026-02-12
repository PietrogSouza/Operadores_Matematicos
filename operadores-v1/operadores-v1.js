


function Somar() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no escopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt('Digite o valor 02:'));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML, utilizando o template de strings (entre crase frase ${variável})
    document.getElementById('resultado').textContent= `O resultado é ${v1 + v2}.`;    
}

function Subtrair() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no scopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt('Digite o valor 02:'));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML.
    document.getElementById('resultado').textContent = `O resultado é ${v1 - v2}.`;    
}

function Multiplicar() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no scopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt('Digite o valor 02:'));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML.
    document.getElementById('resultado').textContent = `O resultado é ${v1 * v2}.`;    
}

function Dividir() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no scopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt('Digite o valor 02:'));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML.
    document.getElementById('resultado').textContent = `O resultado é ${v1 / v2}.`;    
}

function Porcentagem() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no scopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt(`Quantos % de ${v1} você quer exibir?`));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML.
    document.getElementById('resultado').textContent = `O resultado é ${(v1*v2)/100}.`;    
}

function Limpar() {
    // O elemento div resulta será escondido.
    document.getElementById('resultado').style.display = 'none';
}





