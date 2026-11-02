/* =====================================================
   HENDRA TAMPAN MANGATUR SAGALA PORTFOLIO
   MODALS + NAVIGATION
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


/* =====================================================
   MOBILE MENU
===================================================== */

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");


function updateNavigation() {

    let current = "";


    sections.forEach(section => {

        const top =
            section.offsetTop - 180;

        const height =
            section.offsetHeight;


        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateNavigation
);


updateNavigation();


/* =====================================================
   MODAL HELPERS
===================================================== */

function openModal(modal) {

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   PROJECT MODAL
===================================================== */

const projectModal =
    document.getElementById("projectModal");


const projectTriggers =
    document.querySelectorAll(".project-popup-trigger");


const projectTitle =
    document.getElementById("modalProjectTitle");


const projectCategory =
    document.getElementById("modalProjectCategory");


const projectRole =
    document.getElementById("modalProjectRole");


const projectTech =
    document.getElementById("modalProjectTech");


const projectDescription =
    document.getElementById("modalProjectDescription");


projectTriggers.forEach(card => {

    card.addEventListener("click", () => {


        projectTitle.textContent =
            card.dataset.title || "";


        projectCategory.textContent =
            card.dataset.category || "";


        projectRole.textContent =
            card.dataset.role || "";


        projectTech.textContent =
            card.dataset.tech || "";


        projectDescription.textContent =
            card.dataset.description || "";


        openModal(projectModal);

    });

});


/* =====================================================
   CERTIFICATE MODAL
===================================================== */

const certificateModal =
    document.getElementById("certificateModal");


const certificateTriggers =
    document.querySelectorAll(
        ".certificate-popup-trigger"
    );


const certificateTitle =
    document.getElementById(
        "modalCertificateTitle"
    );


const certificateIssuer =
    document.getElementById(
        "modalCertificateIssuer"
    );


const certificateDate =
    document.getElementById(
        "modalCertificateDate"
    );


const certificateValidity =
    document.getElementById(
        "modalCertificateValidity"
    );


const certificateDescription =
    document.getElementById(
        "modalCertificateDescription"
    );


certificateTriggers.forEach(card => {

    card.addEventListener("click", () => {


        certificateTitle.textContent =
            card.dataset.title || "";


        certificateIssuer.textContent =
            card.dataset.issuer || "";


        certificateDate.textContent =
            card.dataset.date || "";


        certificateValidity.textContent =
            card.dataset.validity || "";


        certificateDescription.textContent =
            card.dataset.description || "";


        openModal(certificateModal);

    });

});


/* =====================================================
   SKILL MODAL
===================================================== */

const skillModal =
    document.getElementById("skillModal");


const skillTriggers =
    document.querySelectorAll(
        ".skill-popup-trigger"
    );


const skillTitle =
    document.getElementById(
        "modalSkillTitle"
    );


const skillDescription =
    document.getElementById(
        "modalSkillDescription"
    );


skillTriggers.forEach(card => {

    card.addEventListener("click", () => {


        skillTitle.textContent =
            card.dataset.title || "";


        skillDescription.textContent =
            card.dataset.description || "";


        openModal(skillModal);

    });

});


/* =====================================================
   CLOSE MODALS
===================================================== */

const closeElements =
    document.querySelectorAll(
        "[data-close-modal]"
    );


closeElements.forEach(element => {

    element.addEventListener("click", () => {


        closeModal(projectModal);

        closeModal(certificateModal);

        closeModal(skillModal);

    });

});


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal(projectModal);

            closeModal(certificateModal);

            closeModal(skillModal);

        }

    }
);




/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

            }
        );

    });

/* =====================================================
   CONTACT FORM
===================================================== */

const formSection = document.getElementById("contactForm");
const formEl = document.getElementById("contactFormEl");
const formStatus = document.getElementById("formStatus");
const formOpeners = document.querySelectorAll("[data-open-form]");

// Tampilkan form saat "Let's Talk" ditekan
formOpeners.forEach(opener => {
    opener.addEventListener("click", event => {
        event.preventDefault();

        formSection.classList.add("active");

        setTimeout(() => {
            formSection.scrollIntoView({ behavior: "smooth", block: "start" });
            document.getElementById("formName").focus({ preventScroll: true });
        }, 80);
    });
});

// Kirim form (membuka aplikasi email dengan isi yang sudah terisi)
if (formEl) {
    formEl.addEventListener("submit", event => {
        event.preventDefault();

        const fields = ["formName", "formEmail", "formSubject", "formMessage"];
        let valid = true;

        fields.forEach(id => {
            const input = document.getElementById(id);
            const group = input.closest(".form-group");
            const empty = !input.value.trim();
            const badEmail = id === "formEmail" && !/^\S+@\S+\.\S+$/.test(input.value);

            group.classList.toggle("error", empty || badEmail);
            if (empty || badEmail) valid = false;
        });

        if (!valid) {
            formStatus.className = "form-status fail";
            formStatus.textContent = "Please complete all fields with a valid email.";
            return;
        }

        const name = document.getElementById("formName").value.trim();
        const email = document.getElementById("formEmail").value.trim();
        const subject = document.getElementById("formSubject").value.trim();
        const message = document.getElementById("formMessage").value.trim();

        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

        window.location.href =
            `mailto:hndrasgla123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        formStatus.className = "form-status success";
        formStatus.textContent = "Thank you! Your email app is opening to send the message.";
        formEl.reset();
    });
}