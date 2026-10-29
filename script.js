const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close the mobile menu after selecting a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Demo notification form
const form = document.getElementById("notify-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email");

  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }

  message.textContent =
    "Thanks! This demo does not save email addresses yet. Connect a form service to collect signups.";

  email.value = "";
});
