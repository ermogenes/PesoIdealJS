const calcularPesoIdeal = (dadosPessoa) => {
    let pesoIdeal = 0;
    if (dadosPessoa.sexo === 'F') {
        pesoIdeal = dadosPessoa.altura * 62.1 - 44.7;
    } else if (dadosPessoa.sexo === 'M') {
        pesoIdeal = dadosPessoa.altura * 72.7 - 58.0;
    }
    return pesoIdeal;
};

const clicouEmCalcular = (e) => {
    e.preventDefault();

    const pessoa = {
        sexo: document.getElementById('sexo').value,
        altura: Number(document.getElementById('altura').value),
    };

    let mensagem;
    
    if (Number.isNaN(pessoa.altura)
        || pessoa.altura < 1 
        || pessoa.altura > 3) {
        mensagem = 'Altura inválida!';
    } else {
        if (pessoa.sexo !== 'M' && pessoa.sexo !== 'F') {
            mensagem = 'Sexo inválido!';
        } else {
            const pesoIdeal = calcularPesoIdeal(pessoa);
            mensagem = `O peso ideal é ${pesoIdeal.toFixed(1)}`;
        }
    }
    
    const campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = mensagem;
};

const iniciar = () => {
    document.getElementById('calcular').addEventListener('click', clicouEmCalcular);
};

document.addEventListener('DOMContentLoaded', iniciar);