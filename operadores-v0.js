function Somar(){
    //Criar uma variáel para armazenar o valor 01
    let v1 = parseFloat(prompt('Valor01'));

    //Template de string para exibir o valor
    alert(`O Valor01 digitado pelo usuário ${v1}.`);

    //Criar uma variáel para armazenar o valor 02
    let v2 = parseFloat(prompt('Valor02'));

    //Template de string sintaxe: ${variável ou constante}
    alert(`O Valor02 digitado pelo usuário ${v2}.`);

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é ${v1+v2}.`;

};

function Subtrair(){
    let v1 = parseFloat(prompt('Valor01'));
    alert(`O Valor01 digitado pelo usuário ${v1}.`);

    let v2 = parseFloat(prompt('Valor02'));
    alert(`O Valor02 digitado pelo usuário ${v2}.`);

    document.getElementById('resultado').style.display
};

function Multiplicar(){

};

function Dividir(){

};
