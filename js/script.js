// Evento de abrir e fechar o menu.

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");


for(const element of toggle) {
    element.addEventListener("click", () => {
        nav.classList.toggle("show")
    })
}


// Quando clicar em um item o menu, escondê-lo;
const links = document.querySelectorAll("#header nav ul li a");

for (const link of links) {
    link.addEventListener("click", () => {
        nav.classList.remove("show")
    });
}

// Mudar o header da página quando der um scroll.

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll () {

    if(window.scrollY >= navHeight) {
        // Scroll é maior que a altura do header.
        header.classList.add("scroll")
    } else {
        // Menor que a altura do header.
        header.classList.remove("scroll")
    }
}

// Testimonials slider
const swiper = new Swiper('.swiper-container',{
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 3,
            setWrapperSize: true,
            mousewheel: false,
            keyboard: false
        }
    }
})

// Scroll Reveal -> Mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 500,
    reset: true
});

scrollReveal.reveal(`

    #home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .cards,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social 
    `
    ,{ interval: 100 }
)

// Button Back to Top


const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {

    if(window.scrollY >= 560) {
        backToTopButton.classList.add("show")
    }else {
        backToTopButton.classList.remove("show")
    }
}

// Menu ativo conforme a seção visível na página.
const sections = document.querySelectorAll("main section[id]")
function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
    

    for(const section of sections) {
        //Pegando o topo da section.
        const sectionTop = section.offsetTop
        //Pegando a altura da section.
        const sectionHeight = section.offsetHeight
        // Pegando o Id da section.
        const sectionId = section.getAttribute("id")

        // Altura do Elemento.
        // Altura do Início.
        const checkpointStart = checkpoint >= sectionTop;
        // Altura do fim.
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if(checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.add("active");
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId+ '] ')
            .classList.remove("active");
        }
    }
}

// When Scroll
window.addEventListener("scroll", () => {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection()
})


