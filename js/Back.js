const pato = document.querySelector('.pato');

const jacare = document.querySelector('.jacare');

const pontos = document.querySelector('.pontos');

const Pvalue = document.querySelector('.Pvalue');

const cabo = document.querySelector('.cabo');

const menu = document.querySelector('.menu');

const btn = document.querySelector('.btn-play');

const pontoF = document.querySelector('.Pvalue > span');

const board = document.querySelector('.board');

const incrementPontos = () => {
    pontos.innerHTML = +pontos.innerHTML + 10
}

const count = 0;

const output = document.querySelector('#output');

var p = pontos;

const jump = () => {
    pato.classList.add('jump');
    setTimeout(() => {
        pato.classList.remove('jump');
        
    }, 500);
}

document.addEventListener('keydown', jump);

const loop = setInterval(() => {

    const jacarePosition = jacare.offsetLeft;
    
    const patoPosition = +window.getComputedStyle(pato).bottom.replace('px', '');
    
    incrementPontos()
    
    if (jacarePosition <= 120 && jacarePosition > 0 && patoPosition < 80){

        jacare.style.animation = 'none';
        jacare.style.left = `${jacarePosition}px`;
        
        pato.style.animation = 'none';
        pato.style.bottom = `${patoPosition}px`;

        pato.src = '../imgs/imagsj/death.gif';
        pato.style.width = '180px'
        pato.style.marginLeft = '40px'
        pato.style.marginBottom = '-59px'

        menu.style.display = "flex"

        clearInterval(loop);
        
    }

}, 10);
