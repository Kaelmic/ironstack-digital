const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight - 100;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("active");
      }
    });
  }

  function scrollToSection(id) {
    const section = document.querySelector(id);

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 90,
      behavior: "smooth"
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
