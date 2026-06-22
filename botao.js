/* Previnindo o comportamento padrão do formulário */

const form = document.querySelector('.contact__form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log('Formulário enviado com sucesso.');
});