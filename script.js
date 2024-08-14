// ############################## MUDANÇA DE IMAGEM ##################################
const images = [
    'url("img/img1.jpg")',
    'url("img/img2.jpg")',
    'url("img/img3.jpg")',
    'url("img/img4.jpg")'
];

let contadorindex = 0;

// Função para mudar a imagem de fundo
function changeBackgroundImage() {
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundImage = images[contadorindex];
        contadorindex = (contadorindex + 1) % images.length;
    }
}
// Altere a imagem a cada 5 segundos (5000 ms)
setInterval(changeBackgroundImage, 5000);
// Muda a imagem ao carregar a página
changeBackgroundImage();
// ############################## MUDANÇA DE IMAGEM ##################################
// ############################## BARRA DE NAVEGAÇÃO #################################
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav_div');
    const fundo = document.querySelector('.fundo');
    if (window.scrollY > 50) { // Ajuste o valor conforme necessário
        navbar.classList.add('atv');
        fundo.classList.add('atv');
    } else {
        navbar.classList.remove('atv');
        fundo.classList.remove('atv');
    }
});
// ############################## MUDANÇA DE IMAGEM ##################################