document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.querySelector('.menu-lateral').classList.toggle('show'); // Adiciona ou remove a classe 'show'
        document.querySelector('.overlay').classList.toggle('show'); // Adiciona ou remove a classe 'show' na overlay
    });
    document.querySelector('.overlay').addEventListener('click', function() {
        document.querySelector('.menu-lateral').classList.remove('show');
        document.querySelector('.overlay').classList.remove('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.body.classList.toggle('modo_noturno');
        document.querySelector('.menu-lateral').classList.toggle('show');
        document.querySelector('.overlay').classList.toggle('show');
    });
    
    document.querySelector('.overlay').addEventListener('click', function() {
        document.querySelector('.menu-lateral').classList.remove('show');
        document.querySelector('.overlay').classList.remove('show');
    });
    
    document.querySelector('.modo_noturno img').addEventListener('click', function() {
        document.body.classList.toggle('modo_noturno');
    });
});
