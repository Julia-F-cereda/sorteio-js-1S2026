
const vMin = document.querySelector('.intervalo__slider--min');
const vMax = document.querySelector('.intervalo__slider--max');
const botaoSorteio = document.querySelector('.area__button');
const elementoNumero = document.querySelector('.area__numero');
const listaNumero = document.querySelector('.historico__lista');
const botaoLimpar = document.querySelector('.sorteador__limpar');
const quantidadesNumeosRecentes = 5;

const mensagem = document.querySelector('.area__mensagem');


// console.log(vMax, vMin);
//para atualizar para o valor escolhido
const atualizarSlider = () =>{
    const min= Number(vMin.value);
    const max= Number(vMax.value);
    console.log(min, max);

    //por o valor la no slider
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
};

const validarIntervalo = () =>{
    if (vMin.value > vMax.value){
        vMax.value >= vMin.value;
        //o valor maximo tem que igualar e nao pode andar mais que o minimo
    } if (vMin.value == vMax.value){
        //o valor minimo nao pode mais mudar
        // vMin == 
        // atualizarSlider()
    };

    document.querySelector('.intervalo__valor--min').textContent = vMin;
    document.querySelector('.intervalo__valor--max').textContent = vMax;


};
// vMin.addEventListener('input', atualizarSlider);
// vMax.addEventListener('input', atualizarSlider);

vMin.addEventListener('input', validarIntervalo);
vMax.addEventListener('input', validarIntervalo);
atualizarSlider();

const numeroAleatorio = (min, max) => {
    let numero = Math.floor(Math.random() * (max - min + 1));
    numero += min;
    return numero;
};

//para atualizar o textinho verde
const atualizarTexto = (elemento, valor) =>{
    elemento.textContent = valor;
};

//criar uma lista dos numeros sorteados
const criarHistorico = (numero) =>{
    const li = document.createElement('li');
    li.textContent = numero;

    li.addEventListener('click', () =>{
        navigator.clipboard.writeText(numero);
    });

    return li;
};

//
const atualizarHistorico = (lista, item, limite) =>{
    lista.prepend(item);

    if(lista.children.length > limite){
        lista.removeChild(lista.lastChild);
    }
};

const limparHistorico = () =>{
    if(confirm('Deseja limpar o hitórico de sorteios?'));
    listaNumero.textContent = '';
    elementoNumero.textContent = '0';
}
botaoSorteio.addEventListener('click', () => {

    const min= Number(vMin.value);
    const max=Number(vMax.value);
    //se o valor minimo for maior que o maximo
    if (min>max) {
        mensagem.textContent = 'O valor minimo deve ser menor que o maximo '
        return
    }
    mensagem.textContent = '';

    const numeroSorteado = numeroAleatorio(min, max);

    atualizarTexto(elementoNumero,numeroSorteado);

    const item = criarHistorico(numeroSorteado);
    atualizarHistorico(listaNumero, item, quantidadesNumeosRecentes);


}); 

botaoLimpar.addEventListener('click', limparHistorico);
//