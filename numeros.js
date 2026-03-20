


const vMin = document.querySelector('.intervalo__slider--min');
const vMax = document.querySelector('.intervalo__slider--max');
const botaoSorteio = document.querySelector('.area__button');
const elementoNumero = document.querySelector('.area__numero');
const listaNumero = document.querySelector('.historico__lista');
const botaoLimpar = document.querySelector('.sorteador__limpar');

const mensagem = document.querySelector('.area__mensagem')
 mensagem = innerHT


// console.log(vMax, vMin);

const atualizarSlider = () =>{
    const min= Number(vMin.value);
    const max= Number(vMax.value);
    console.log(min, max);

    

    //por o valor la no slider
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
};

vMin.addEventListener('input', atualizarSlider);
vMax.addEventListener('input', atualizarSlider);
atualizarSlider();

const numeroAleatorio = (min, max) => {
    let numero = Math.floor(Math.random() * (max - min + 1));
    numero += min;
    return numero;
}