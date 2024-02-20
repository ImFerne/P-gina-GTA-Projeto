const botao = document.querySelector('.btn-plataforma');
const elementoPlatataformas = document.querySelector('.btn-plataforma .plataformas');

botao.addEventListener('click', () => {
    elementoPlatataformas.classList.toggle('ativo');
})