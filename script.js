// Adicionar classe ativo ao link clicado no menu
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a').forEach(function(elem) {
        elem.addEventListener('click', function(event) {
            document.querySelectorAll('nav a').forEach(function(elem) {
                elem.classList.remove('ativo');
            });
            event.target.classList.add('ativo');
        });
    });
});
