// Navbar Active Link
let links = document.querySelectorAll("nav ul li a");
let sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop) {
      links.forEach((link) => {
        if (section.id === link.getAttribute("href").substring(1)) {
          links.forEach((link) => link.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }
  });
});
// Navbar Active Link

// Type Effect in Landing Section
document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Developer", "Designer", "Photographer", "Freelancer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = "";

  const typeEffect = () => {
    const textElement = document.getElementById("text");
    // Check if the current text is typing and it length less than the current word length to type char
    if (!isDeleting && charIndex < texts[textIndex].length) {
      currentText = texts[textIndex].substring(0, charIndex + 1);
      textElement.textContent = currentText;
      charIndex++;
      setTimeout(typeEffect, 100);
    }
    // Check if the current text is deleting and it length is greater than 0 to delete char
    else if (isDeleting && charIndex > 0) {
      currentText = texts[textIndex].substring(0, charIndex - 1);
      textElement.textContent = currentText;
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      // Check if the current text typed and deleted and go to next word
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % texts.length;
      }
      setTimeout(typeEffect, 1000);
    }
  };

  setTimeout(typeEffect, 1000);
});

// Type Effect in Landing Section

// Progress In Skills Section
let skillsSection = document.querySelector(".skills");
let skills = document.querySelectorAll(".progress-bar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop + 200) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
});
// Progress In Skills Section

// Filter In Portfolio Section
let filters = document.querySelectorAll(".filter li");
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((filter) => filter.classList.remove("active"));

    filter.classList.add("active");

    document.querySelectorAll(".all").forEach((e) => {
      e.classList.add("hidden");
    });
    document.querySelectorAll(filter.dataset.select).forEach((e) => {
      e.classList.remove("hidden");
    });
  });
});
// Filter In Portfolio Section
// Show Hidden Elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".hidden").forEach((e) => {
  observer.observe(e);
});