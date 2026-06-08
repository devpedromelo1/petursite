// ==========================
// MUDAR HEADER AO ROLAR
// ==========================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "none";
    }

});


// ==========================
// ANIMAÇÃO AO ROLAR
// ==========================

const elementos = document.querySelectorAll(
    ".card-viagem, .servico, .galeria img, .blindados, .sobre, .contato"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});


// ==========================
// FORMULÁRIO WHATSAPP
// ==========================

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nome =
            document.getElementById("nome").value;

        const telefone =
            document.getElementById("telefone").value;

        const destino =
            document.getElementById("destino").value;

        const mensagem =
            document.getElementById("mensagem").value;

        const texto =
            `Olá, meu nome é ${nome}%0A` +
            `Telefone: ${telefone}%0A` +
            `Destino: ${destino}%0A` +
            `Mensagem: ${mensagem}`;

        window.open(
            `https://wa.me/5581988604393?text=${texto}`,
            "_blank"
        );

        formulario.reset();

    });

}


// ==========================
// SCROLL SUAVE
// ==========================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});