// ========================================
// YOUTH FUTURE - WEBSITE JAVASCRIPT
// ========================================


// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


// Close mobile menu after clicking

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


// 2. SCROLL REVEAL ANIMATIONS

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

const revealElements = document.querySelectorAll(".reveal");

revealElements.forEach(element => {

    observer.observe(element);

});


// 3. ANIMATED STATISTICS COUNTER

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const duration = 1800;
            const startTime = performance.now();

            function updateCounter(time) {

                const progress = Math.min(
                    (time - startTime) / duration, 1
                );

                const eased = 1 - Math.pow(1 - progress, 4);

                current = Math.floor(target * eased);

                counter.innerText = current;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }

            }

            requestAnimationFrame(updateCounter);

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


// 4. ACTIVE NAVIGATION ON SCROLL

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}, { passive: true });


// 5. CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !topic || !message) {

        alert("Please complete all fields.");

        return;

    }

    document.getElementById("formMessage").innerText =
        "Thank you, " + name +
        "! Your message has been received. 🚀";

    contactForm.reset();

});


// 6. WEBSITE LOADED MESSAGE

console.log("--------------------------------");
console.log("YOUTH FUTURE WEBSITE");
console.log("Website loaded successfully!");
console.log("Empowering the next generation.");
console.log("--------------------------------");