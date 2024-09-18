/*navlinks*/

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};
  
ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1500,
});
  
ScrollReveal().reveal(".treatment_card", {
    ...scrollRevealOption,
    interval: 500,
});
  
ScrollReveal().reveal(".showcase_image img", {
    ...scrollRevealOption,
    origin: "left",
});

 ScrollReveal().reveal(".showcase_content h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".showcase_content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".showcase_btn", {
    ...scrollRevealOption,
    delay: 1500,
});
  
ScrollReveal().reveal(".banner_card", {
    ...scrollRevealOption,
    interval: 500,
});
  
 ScrollReveal().reveal(".discover_card", {
    ...scrollRevealOption,
    interval: 500,
});
  
const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;

        // Lower the step size for smoother animation
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  });