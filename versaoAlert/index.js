let sexo = prompt('Digite o sexo:') || '';
let altura = prompt('Digite a altura:') || '';

sexo = sexo.toUpperCase();
altura = Number(altura);

let mensagem;

if (Number.isNaN(altura) || altura < 1 || altura > 3) {
    mensagem = 'Altura inválida!';
} else {
    if (sexo === 'F') {
        const pesoIdeal = altura * 62.1 - 44.7;
        mensagem = `O peso ideal é ${pesoIdeal.toFixed(1)}`;
    } else if (sexo === 'M') {
        const pesoIdeal = altura * 72.7 - 58.0;
        mensagem = `O peso ideal é ${pesoIdeal.toFixed(1)}`;
    } else {
        mensagem = 'Sexo inválido!';
    }
}

alert(mensagem);