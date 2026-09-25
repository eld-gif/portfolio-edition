/* =========================================================
   CURSEUR PERSONNALISÉ
========================================================= */

const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

if (cursor && cursorDot) {

    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

        cursorDot.style.left = `${event.clientX}px`;
        cursorDot.style.top = `${event.clientY}px`;

    });

}


/* =========================================================
   CURSEUR — ÉLÉMENTS INTERACTIFS
========================================================= */

document.querySelectorAll(
    "a, button, .idea-card, .watch-card, .process-card, .campaign-step, .skill-item, .stat-card, .why-quote, .vision-final"
).forEach((element) => {

    element.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
    });

});


/* =========================================================
   APPARITION DES SECTIONS AU SCROLL
========================================================= */

const revealElements = document.querySelectorAll(".section-reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================================
   MOUVEMENT DES CARTES D'IDÉES
========================================================= */

document.querySelectorAll(
    ".idea-card, .watch-card, .process-card, .campaign-step"
).forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        const rotateX = y * -3;
        const rotateY = x * 3;

        card.style.transform =
            `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   PARALLAXE HERO
========================================================= */

const heroImage = document.querySelector(".hero-image-frame");

if (heroImage && window.innerWidth > 700) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        heroImage.style.transform =
            `rotate(2deg) translate(${x * 8}px, ${y * 8}px)`;

    });

}


/* =========================================================
   NAVIGATION FLUIDE
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#" ||
            targetId === "#contact-message" ||
            targetId === "#contact"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   PETITE ANIMATION DES FLÈCHES
========================================================= */

document.querySelectorAll(
    ".idea-arrow, .ideas-heading-arrow, .about-arrow, .why-hand-arrow, .vision-arrow, .contact-arrow, .creative-intro-arrow"
).forEach((arrow) => {

    arrow.addEventListener("mouseenter", () => {

        arrow.style.transform =
            "translate(6px,-5px) rotate(8deg)";

    });

    arrow.addEventListener("mouseleave", () => {

        arrow.style.transform = "";

    });

});


/* =========================================================
   RÉDUCTION DES ANIMATIONS SI NÉCESSAIRE
========================================================= */

const reducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)");

if (reducedMotion.matches) {

    document.documentElement.style.scrollBehavior = "auto";

}


/* =========================================================
   OUVERTURE DE L'INTERFACE CONTACT
========================================================= */

const contactButton =
    document.querySelector('.contact-button[href="#contact-message"]');

if (contactButton) {

    contactButton.addEventListener("click", (event) => {

        event.preventDefault();

        window.location.hash = "contact-message";

    });

}


/* =========================================================
   RETOUR PROPRE DE L'INTERFACE CONTACT
========================================================= */

const closeContactScreen =
    document.getElementById("close-contact-screen");

if (closeContactScreen) {

    closeContactScreen.addEventListener("click", (event) => {

        event.preventDefault();

        /*
         * On enlève l'interface contact de l'écran
         * en revenant sur l'ancre principale.
         */
        window.location.hash = "contact";

        const contact =
            document.getElementById("contact");

        if (contact) {

            setTimeout(() => {

                contact.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }

    });

}


/* =========================================================
   RETOUR AUTOMATIQUE VERS CONTACT
========================================================= */

window.addEventListener("hashchange", () => {

    if (window.location.hash === "#contact") {

        const contact =
            document.getElementById("contact");

        if (contact) {

            setTimeout(() => {

                contact.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 50);

        }

    }

});