const botaoHamburguer = document.querySelector("[data-hamburguer]");
const mobileMenu = document.querySelector("[data-mobileMenu]");

botaoHamburguer.addEventListener("click", function() {
    document.documentElement.classList.toggle('menuLateral__ativo');
    mobileMenu.classList.toggle("mobileMenu--show");
});

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menuLateral__ativo');
        mobileMenu.classList.remove('mobileMenu--show');
    };
};

const botaoLupa = document.querySelector("[data-lupa]")