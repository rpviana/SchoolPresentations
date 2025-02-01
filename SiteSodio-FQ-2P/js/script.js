// Função para mostrar o slide correto
function showSlide(index) {
    // Esconder a mensagem de apresentação
    const presentation = document.querySelector('.presentation');
    presentation.style.display = 'none';

    // Esconder todos os slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));

    // Mostrar o slide correspondente
    slides[index].classList.add('active');
}

// Mostrar a mensagem de apresentação ao carregar a página
window.onload = function() {
    const presentation = document.querySelector('.presentation');
    presentation.style.display = 'flex'; // Exibir a mensagem de apresentação
};

// Função para alternar o menu (mostrar ou esconder)
function toggleMenu() {
    const menu = document.getElementById('menu');
    const content = document.querySelector('.content');
    const menuToggle = document.getElementById('menuToggle');
    
    // Alternar a exibição do menu
    menu.classList.toggle('show');
    content.classList.toggle('with-menu');
    
    // Mudar a cor do ícone do menu quando estiver aberto
    menuToggle.classList.toggle('open');
}
